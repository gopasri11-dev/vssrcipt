self.onmessage = () => {
    var sum=0;
    for(var i=0;i<=10;i++){
        sum = sum+i;
    }
    self.postMessage(sum);    
};
