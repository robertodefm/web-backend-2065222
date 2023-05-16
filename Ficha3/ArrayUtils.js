module.exports = {
    isEmpty: function (array) {

        return array.length == 0;
    },
    max: function (array) {
        var maior = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maior)
                maior = array[i];
        }
        return maior;
    },
    min: function (array) {
        var menor = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < menor)
                menor = array[i];
        }
        return menor;
    },
    average: function (array) {
        var media = 0;
        var soma = 0;
        for (let i = 0; i < array.length; i++) {
            soma += array[i];
        }
        media = soma / array.length;
        return media;
    },
    indexOf: function (array, value) {
        var index = -1;
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value)
                index = i;

        };
        return index;
    },
    subArray: function (array, startIndex, endIndex) {
        var array2 = [];
        for (let i = startIndex; i <= endIndex; i++) {
            array2.push(array[i]);
        }
        return array2;
    },
    isSameLength: function (a1, a2) {
        return a1.length == a2.length;
    },
    reverse: function (array) {
        var array2 = [];
        for (let i = array.length - 1; i >= 0; i--) {
            array2.push(array[i]);
        }
        return array2;
    },
    swap: function (array, index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    },
    contains: function (array, value) {
        return this.indexOf(array, value) != -1;
    },
    concatenate: function (a1, a2) {
        for (let i = 0; i < a2.length; i++) {
            a1.push(a2[i]);
        };
        return a1;
    }
};


