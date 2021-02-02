function vowelsCheck() {
    var vowelCount = 0;
    var vowelList = ["а", "А", "о", "О", "и", "И", "е", "Е", "ё", "Ё", "э", "Э", "ы", "Ы", "у", "У", "ю", "Ю", "я", "Я"];
    var txt = prompt('Введите любой текст для просчитывания гласных букв');
    for (var i = 0; i < txt.length; i++) 
        for (var vowels = 0; vowels < vowelList.length; vowels++)
        if (txt[i] === vowelList[vowels]) {
            ++vowelCount;
            break;
        }
        return vowelCount ? vowelCount : ('Гласные не найдены или введённый вами текст, не на русском языке, ну или вы тупо ничего не ввели');
    
}
alert(vowelsCheck())