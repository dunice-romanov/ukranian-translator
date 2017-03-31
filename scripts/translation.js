'strict mode'

jQuery(document).ready(function() {
   
    var UKRANIAN_SYMBOL = 'i';
    var BLANK_SPACE = " ";
    
    var ID_TEXTAREA = "input-area";
    var ID_BUTTON_SUMBMIT = "translate-button";
    var ID_SPAN = "translation-result-text";
    
    var dictString = "ауеыоэяюи";
    
    var ukr = translateToUkrainian("мама ела кашу каша ыкала и гыкала");
    
    
    function translateToUkrainian(text_) {
        var str_ = [];
        var text = text_.toLowerCase();
        var dictArray = convertDictStringToArray(dictString);
        for (var i = 0; i < text.length; i++) {
            var char = text.charAt(i);
            var nextSymbol = text.charAt(i+1);
            if (!isInDict(char, dictArray) || 
                nextSymbol == BLANK_SPACE  ||
                nextSymbol === "" ) {
                str_.push(char);
                continue;
            }
            
            str_.push(UKRANIAN_SYMBOL);
            
        }
        return str_.join("");
    }
    
    function isInDict(char, dictArray) {
        for (var i = 0; i < dictArray.length; i++) {
            if (dictArray[i] == char) { return true; }
        }
        return false;
    }
    
    function convertDictStringToArray(str) {
        var result = [];
        for (var i = 0; i < str.length; i++) {
            result.push(str.charAt(i));
        }
        return result;
    }
    
    
    function onClick() {
        var some = "some str";
        var textArea = $('#' + ID_TEXTAREA);
        var span = $('#' + ID_SPAN);
        var textOriginal = textArea.val();
        var textTranslated = translateToUkrainian(textOriginal);
        span.text(textTranslated);
    }
    
    
    
    $('#'+ID_TEXTAREA).bind('input', function(){
       onClick(); 
    });
    
});