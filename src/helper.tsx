export function sum(a:number, b:number) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Parameters must be numbers")
  }
  return a + b
}

 export function getTodayDateString() {
    const now = new Date();
    
    const day = String(now.getDate()).padStart(2, '0'); // Add 0 if necessary
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months 0 to 11 so plus 1
    const year = now.getFullYear();

    return `${year}-${month}-${day}`;
  };

  export const seededRandom = function (seed:number) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date:Date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function(_state:FormData) {
    return true;
};