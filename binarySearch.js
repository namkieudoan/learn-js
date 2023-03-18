// loi
const a = [1,2,3,4,5,6,7,8,9];
const x =  4;

function BinSearch (a,x){
    let left = 0;
    let right = a.length;
    let middle = (left + right)/2;
    while (left <= right){
        if (a[middle] == x){
            return (a[middle]);
        }
        else if (a[middle] > x){
            right = middle -1;
        }
        else {
        left = middle +1;
        }
    }
    if(left > right) {
        return -1
    }
};
BinSearch(a,x)