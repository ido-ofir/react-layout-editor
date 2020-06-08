
function typeOf(thing){
    var type = toString.call(thing);
    return type.substring(8, type.length -1).toLowerCase();
}

function match(a,b){
    for(var m in a){
        if(a[m] !== b[m]){
            return false;
        }
    }
    return true;
}

let utils = {
    typeOf,
    uuid(){
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
			const r = (Math.random() * 16) | 0;
			const v = c === "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
    },
    set(target, selector, data){
        let selectorType = typeOf(selector);
        let targetType = typeOf(target);

        if(selectorType === 'array'){
            // if it's the end of the query return the new value
            if(!selector.length){
                let dataType = typeOf(data);
                // if the new value is an object 
                // merge it with existing and return
                if(dataType === 'object'){
                    return {...target, ...data};
                }
                // if the new value is a function return it's result
                if(dataType === 'function'){
                    return data(target);
                }
                // else return the new value
                return data;
            }
            let key = selector[0];
            let keyType = typeOf(key);
            if(keyType === 'array'){
                // return key.map()
            }
            if(targetType === 'object'){
                // if the current selector item is a function
                // just return what it returns;
                if(keyType === 'function'){
                    return key(target)
                }
                // if the target is an object, 
                // return a new object
                // with the new property value under 'key'
                console.log('999', key)
                return {
                    ...target,
                    [key]: utils.set(
                        target[key],
                        selector.slice(1),
                        data
                    ) 
                };
            }
            if(targetType === 'array'){
                
                let nextTarget;
                if(keyType === 'function'){
                    nextTarget = target.find(key);
                }
                else if(keyType === 'object'){
                    nextTarget = target.find(item => match(key, item));
                }
                let index = target.indexOf(nextTarget);
                let result = [...target];
                result[index] = utils.set(
                    nextTarget,
                    selector.slice(1),
                    data
                )
                return result;
            }
            return data;
        }
    },
    get(target, selector){
        let selectorType = typeOf(selector);
        let targetType = typeOf(target);
        if(selectorType === 'array'){
            // if it's the end of the query return the current target
            if(!selector.length){
                return target;
            }
            let key = selector[0];
            let keyType = typeOf(key);
            if(keyType === 'array'){
                // return key.map()
            }
            if(targetType === 'object'){
                // if the current selector item is a function
                // just return what it returns;
                if(keyType === 'function'){
                    return key(target)
                }
                if(keyType === 'string'){
                    return utils.get(
                        target[key],
                        selector.slice(1)
                    );
                }
            }
            if(targetType === 'array'){
                let nextTarget;
                if(keyType === 'function'){
                    nextTarget = target.find(key);
                }
                else if(keyType === 'object'){
                    nextTarget = target.find(item => match(key, item));
                }
                return utils.get(
                    nextTarget,
                    selector.slice(1)
                );
            }
        }
    }
}

export default utils;