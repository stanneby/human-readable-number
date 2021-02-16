module.exports = function toReadable (number) {
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const evenMore = ['hundred', 'thousand'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    number = number.toString().split('');
    let str = []

    number.every( (value, index, arr) => {
        let bias = arr.length-index

        switch(bias){
            case 3:
                str.push(digits[parseInt(value)]);
                str.push(evenMore[0]);
                break;
            case 2:
                if(value == '0'){
                } else if(value == '1'){
                    str.push(teens[parseInt(arr[index+1])]);
                    return false;
                } else {
                    str.push(tens[parseInt(value)]);
                }
                break;
            case 1:
                if(arr.length == 1 && value == '0'){
                    str.push('zero');
                } else if(arr.length != 1 && value == '0'){
    
                } else {
                    str.push(digits[parseInt(value)]);
                }
                break;
        }
        return true;
    })

    return str.join(' ');
}
