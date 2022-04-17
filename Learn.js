let cc = "4556364607935616";

alert(maskify(cc));

function maskify(cc) {
    if (cc.length > 4) {
        let newcc = new String();
        for (let i = 0; i < cc.length-4; i++){
            newcc = newcc + "#";
        }
        return newcc + cc.slice(-4);
    }
    return cc;
}