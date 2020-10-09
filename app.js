let keywords, splitkw, style, size, category, quantity, name, email, tel, address, apt, zip, city, state, cardnum, cardmonth, cardyear, cvv, delay, monitordelay = ""
let timer, tmonth, tday, tyear, thour, tmin, tsec = ""
let time
var shouldStop = false
var canStart = false
let canCO = false

// change time placeholder every 1/4 second, and check if timer should be shown
setInterval(function(){
    if(document.querySelector('#timeron').checked){
        document.querySelector('#timerdiv').className = ""
    } else {
        document.querySelector('#timerdiv').className = "hidden"
    }

    document.querySelector('#showmonth').innerHTML = (new Date().getMonth() + 1)+" /";
    document.querySelector('#showday').innerHTML = (new Date().getDate())+" /";
    document.querySelector('#showyear').innerHTML = (new Date().getFullYear())+" /";
    document.querySelector('#showhour').innerHTML = (new Date().getHours())+" /";
    document.querySelector('#showminute').innerHTML = (new Date().getMinutes())+" /";
    document.querySelector('#showsecond').innerHTML = new Date().getSeconds();
}, 250)

function changemessage(message, color){
    document.querySelector('#taskMessage').innerText = message
    document.querySelector('#taskMessage').style["color"] = color
}

function discord_message(webHookURL, message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", webHookURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
        'username':'FrostPreme',
    }));
}

document.addEventListener('DOMContentLoaded', function(){
    // on page load, get all saved variables and push them to the page
    chrome.storage.local.get(null, function(result){
        keywords = result.keywords
        style = result.style
        size = result.size
        category = result.category
        quantity = result.quantity
        name = result.name
        email = result.email
        tel = result.tel
        address = result.address
        apt = result.apt
        zip = result.zip
        city = result.city
        state = result.state
        cardnum = result.cardnum
        cardmonth = result.cardmonth
        cardyear = result.cardyear
        cvv = result.cvv
        delay = result.delay
        monitordelay = result.monitordelay
        if(keywords != undefined){document.querySelector('#keywords').value = keywords; canStart = true}
        if(style != undefined){document.querySelector('#style').value = style}
        if(size != undefined){document.getElementById(size).selected = true}
        if(category != undefined){document.getElementById(category).selected = true}
        if(quantity != undefined){document.getElementById(quantity).selected = true}
        if(name != undefined){document.querySelector('#name').value = name}
        if(email != undefined){document.querySelector('#email').value = email}
        if(tel != undefined){document.querySelector('#tel').value = tel}
        if(address != undefined){document.querySelector('#address').value = address}
        if(apt != undefined){document.querySelector('#apt').value = apt}
        if(zip != undefined){document.querySelector('#zip').value = zip}
        if(city != undefined){document.querySelector('#city').value = city}
        if(state != undefined){document.getElementById(state).selected = true}
        if(cardnum != undefined){document.querySelector('#cardnum').value = cardnum}
        if(cardmonth != undefined){document.getElementById(cardmonth).selected = true}
        if(cardyear != undefined){document.getElementById(cardyear).selected = true}
        if(cvv != undefined){document.querySelector('#cvv').value = cvv}
        if(delay != undefined){document.querySelector('#delay').value = delay}
        if(monitordelay != undefined){document.querySelector('#monitordelay').value = monitordelay}
        timer = result.timer
        tmonth = result.tmonth
        tday = result.tday
        tyear = result.tyear
        thour = result.thour
        tmin = result.tmin
        tsec = result.tsec
        if(timer){
            timer = true
            document.querySelector('#timeron').checked = true
            document.querySelector('#tmonth').value = tmonth
            document.querySelector('#tday').value = tday
            document.querySelector('#tyear').value = tyear
            document.querySelector('#thour').value = thour
            document.querySelector('#tmin').value = tmin
            document.querySelector('#tsec').value = tsec
        } else {
            timer = false
        }
    })

    var saveDataButton = document.getElementById('saveData')
    saveDataButton.addEventListener('click', function() {
        // if the form is not completely filled out, an error will show and it wont be saved
        if(document.querySelector('#keywords').value == '' || document.querySelector('#style').value == '' || document.getElementById('sizedefault').selected == true || document.getElementById('categorydefault').selected == true || document.getElementById('quantitydefault').selected == true || document.querySelector('#name').value == '' || document.querySelector('#email').value == '' || document.querySelector('#tel').value == '' || document.querySelector('#address').value == '' || document.querySelector('#zip').value == '' || document.querySelector('#city').value == '' || document.getElementById('statedefault').selected == true || document.querySelector('#cardnum').value == '' || document.getElementById('monthdefault').selected == true || document.getElementById('yeardefault').selected == true || document.querySelector('#cvv').value == '' || document.querySelector('#delay').value == '' || document.querySelector('#monitordelay').value == ''){
            changemessage('ERROR: Please fill out all fields!', 'red')
        } else {
            // if the form is done, it saves it to local variables and storage
            keywords = document.querySelector('#keywords').value
            style = document.querySelector('#style').value
            size = document.querySelector('#size').options[document.querySelector('#size').selectedIndex].id
            category = document.querySelector('#category').options[document.querySelector('#category').selectedIndex].id
            quantity = document.querySelector('#quantity').options[document.querySelector('#quantity').selectedIndex].id
            name = document.querySelector('#name').value
            email = document.querySelector('#email').value
            tel = document.querySelector('#tel').value
            address = document.querySelector('#address').value
            apt = document.querySelector('#apt').value
            zip = document.querySelector('#zip').value
            city = document.querySelector('#city').value
            state = document.querySelector('#state').options[document.querySelector('#state').selectedIndex].id
            cardnum = document.querySelector('#cardnum').value
            cardmonth = document.querySelector('#cardmonth').options[document.querySelector('#cardmonth').selectedIndex].id
            cardyear = document.querySelector('#cardyear').options[document.querySelector('#cardyear').selectedIndex].id
            cvv = document.querySelector('#cvv').value
            delay = document.querySelector('#delay').value
            monitordelay = document.querySelector('#monitordelay').value
            chrome.storage.local.set({
                keywords: keywords,
                style: style,
                size: size,
                category: category,
                quantity: quantity,
                name: name,
                email: email,
                tel: tel,
                address: address,
                apt: apt,
                zip: zip,
                city: city,
                state: state,
                cardnum: cardnum,
                cardmonth: cardmonth,
                cardyear: cardyear,
                cvv: cvv,
                delay: delay,
                monitordelay: monitordelay
            })
            // if timer is activated, grab values, if not set to undefined
            if(document.querySelector('#timeron').checked){
                timer = true
                tmonth = document.querySelector('#tmonth').value
                tday = document.querySelector('#tday').value
                tyear = document.querySelector('#tyear').value
                thour = document.querySelector('#thour').value
                tmin = document.querySelector('#tmin').value
                tsec = document.querySelector('#tsec').value
            } else {
                timer = false
                tmonth = undefined
                tday = undefined
                tyear = undefined
                thour = undefined
                tmin = undefined
                tsec = undefined
            }
            chrome.storage.local.set({
                timer: timer,
                tmonth: tmonth,
                tday: tday,
                tyear: tyear,
                thour: thour,
                tmin: tmin,
                tsec: tsec
            })
            // show saved and allow to start
            changemessage('Saved!', 'green')
            canStart = true
        }
    })
    
    var clearDataButton = document.getElementById('clearData')
    clearDataButton.addEventListener('click', function() {
        // on clear, dont allow to start and remove/clean all variables/storage
        canStart = false
        keywords, splitkw, style, size, category, quantity, name, email, tel, address, apt, zip, city, state, cardnum, cardmonth, cardyear, cvv, delay, monitordelay = ""
        timer, tmonth, tday, tyear, thour, tmin, tsec = ""
        chrome.storage.local.remove(["keywords","style","size","category","quantity","name","email","tel","address","apt","zip","city","state","cardnum","cardmonth","cardyear","cvv","delay", "monitordelay", "timer", "tmonth", "tday", "tyear", "thour", "tmin", "tsec"])
        document.querySelector('#keywords').value = ""
        document.querySelector('#style').value = ""
        document.getElementById("sizedefault").selected = true
        document.getElementById("categorydefault").selected = true
        document.getElementById("quantitydefault").selected = true
        document.querySelector('#name').value = ""
        document.querySelector('#email').value = ""
        document.querySelector('#tel').value = ""
        document.querySelector('#address').value = ""
        document.querySelector('#apt').value = ""
        document.querySelector('#zip').value = ""
        document.querySelector('#city').value = ""
        document.getElementById("statedefault").selected = true
        document.querySelector('#cardnum').value = ""
        document.getElementById("monthdefault").selected = true
        document.getElementById("yeardefault").selected = true
        document.querySelector('#cvv').value = ""
        document.querySelector('#delay').value = ""
        document.querySelector('#monitordelay').value = ""
        document.querySelector('#tmonth').value = tmonth
        document.querySelector('#tday').value = tday
        document.querySelector('#tyear').value = tyear
        document.querySelector('#thour').value = thour
        document.querySelector('#tmin').value = tmin
        document.querySelector('#tsec').value = tsec
        changemessage('Cleared!', 'orange')
    })

    var startTaskButton = document.getElementById('startTask')
    startTaskButton.addEventListener('click', function() {
        if(canStart){
            shouldStop = false
            changemessage('Task started!', 'green')
            if(timer){
                startcountdown()
            } else {
                findProduct()
            }
        } else {
            changemessage('Error starting task! Fill all fields and save!', 'red')
        }
    }, false)

    var stopTaskButton = document.getElementById('stopTask')
    stopTaskButton.addEventListener('click', function() {
        shouldStop = true
        changemessage('Task stopped!', 'red')
    }, false)
})

function startcountdown(){
    var d = new Date(tyear, tmonth-1, tday, thour, tmin, tsec)
    var countdowninterval = setInterval(function(){
        if(d <= Date.now() && !shouldStop){
            findProduct()
            clearInterval(countdowninterval)
        } else if(!shouldStop){
            changemessage(`Waiting: ${d-Date.now()} ms`, 'orange')
        } else {
            clearInterval(countdowninterval)
            changemessage('Task stopped!', 'red')
        }
    }, 100)
}

function findProduct(){
    chrome.cookies.getAll({domain: "supremenewyork.com"}, function(cookies) {
        for(var i=0; i<cookies.length; i++) {
            chrome.cookies.remove({url: "https://www.supremenewyork.com" + cookies[i].path, name: cookies[i].name})
        }
    })
    changemessage('Looking for product...', 'orange')
    time = (new Date()).getTime()
    fetch(`https://www.supremenewyork.com/mobile_stock.json?_=${time}`)
    .then(function(response){
        if (response.status !== 200 || shouldStop){
            changemessage('Task stopped!', 'red')
            return
        }
        response.json().then(function(data){
            const products = data.products_and_categories[category]
            splitkw = keywords.split(',')

            let gotproduct = false

            for(const pr in products){
                let goodproduct = true
                for(const kw in splitkw){
                    if(splitkw[kw].includes('-') && products[pr].name.toLowerCase().includes(splitkw[kw].toLowerCase().substr(1)) == true){
                        goodproduct = false
                        break
                    } else if(splitkw[kw].includes('-') == false && products[pr].name.toLowerCase().includes(splitkw[kw].toLowerCase()) == false){
                        goodproduct = false
                        break
                    }
                }

                if(goodproduct && !shouldStop){
                    gotproduct = true
                    findVariant(products, pr)
                    return
                }
            }
            if(!gotproduct && !shouldStop){
                changemessage('Product not found, retrying...', 'orange')
                setTimeout(function(){
                    findProduct()
                }, monitordelay)
            }
        })
    })
}

function findVariant(products, pr){
    changemessage('Looking for product variation...', 'orange')
    let shopcat
    if(category.toLowerCase() == 'tops/sweaters'){
        shopcat = 'tops_sweaters'
    } else {
        shopcat = category.toLowerCase()
    }
    time = (new Date()).getTime()
    fetch(`https://www.supremenewyork.com/shop/${shopcat}/${products[pr].id}.json?_=${time}`)
    .then(function(response){
        if (response.status !== 200 || shouldStop){
            changemessage('Task stopped!', 'red')
            return
        }
        response.json().then(function(data){
            const variants = data.styles

            for(const vr in variants){
                if(variants[vr].name.toLowerCase() == style.toLowerCase() && !shouldStop || style.toLowerCase() == "n/a" && !shouldStop){
                    const sizes = variants[vr].sizes
                    changemessage(`Found: ${variants[vr].name} ${products[pr].name}`, 'green')
                    for(const sz in sizes){
                        if(size.substr(1).toLowerCase() == "random" && !shouldStop || size.substr(1).toLowerCase() == "smallest" && !shouldStop){
                            getSmallest(`https://www.supremenewyork.com/shop/${shopcat}/${products[pr].id}/${variants[vr].id}`, function(atcSize){
                                if(quantity.substr(1).toLowerCase() != "n/a"){
                                    addSize(products[pr].id, variants[vr].id, atcSize, quantity.substr(1), cart)
                                } else {
                                    addSize(products[pr].id, variants[vr].id, atcSize, 1, cart)
                                }
                            })
                            break
                        } else if(size.substr(1).toLowerCase() == "largest" && !shouldStop){
                            getLargest(`https://www.supremenewyork.com/shop/${shopcat}/${products[pr].id}/${variants[vr].id}`, function(atcSize){
                                if(quantity.substr(1).toLowerCase() != "n/a"){
                                    addSize(products[pr].id, variants[vr].id, atcSize, quantity.substr(1), cart)
                                } else {
                                    addSize(products[pr].id, variants[vr].id, atcSize, 1, cart)
                                }
                            })
                            break
                        } else if(size.substr(1).toLowerCase() == "n/a" && !shouldStop){
                            if(quantity.substr(1).toLowerCase() != "n/a"){
                                addSize(products[pr].id, variants[vr].id, sizes[sz].id, quantity.substr(1), cart)
                            } else {
                                addSize(products[pr].id, variants[vr].id, sizes[sz].id, 1, cart)
                            }
                            break
                        } else if(size.substr(1).toLowerCase() != "random" && size.substr(1).toLowerCase() != "smallest" && size.substr(1).toLowerCase() != "largest" && !shouldStop){
                            if(sizes[sz].name.toLowerCase() == size.substr(1).toLowerCase() && !shouldStop){
                                if(quantity.substr(1).toLowerCase() != "n/a"){
                                    addSize(products[pr].id, variants[vr].id, sizes[sz].id, quantity.substr(1), cart)
                                } else {
                                    addSize(products[pr].id, variants[vr].id, sizes[sz].id, 1, cart)
                                }
                                break
                            }
                        } else if(shouldStop){
                            changemessage('Task stopped!', 'red')
                            break
                        }
                    }
                    break
                } else if(shouldStop){
                    changemessage('Task stopped!', 'red')
                    break
                }
            }
        })
    })
}

function getSmallest(url, callback){
    let pageHTML = document.createElement( 'html' );
    return fetch(url)
    .then(function(response){
        return response.text()
    }).then(function (html) {
        pageHTML.innerHTML = html;
        if(!shouldStop){
            try{
                callback(pageHTML.querySelector('#s')[0].value)
            } catch {
                changemessage('Product OOS, retrying...', 'orange')
                setTimeout(function(){
                    changemessage('Looking for product variation...', 'orange')
                    getLargest(url, callback)
                }, monitordelay)
            }
        } else if(shouldStop){
            changemessage('Task stopped!', 'red')
        }
    })
}

function getLargest(url, callback){
    let pageHTML = document.createElement( 'html' );
    return fetch(url)
    .then(function(response){
        return response.text()
    }).then(function (html) {
        pageHTML.innerHTML = html;
        if(!shouldStop){
            try{
                callback(pageHTML.querySelector('#s')[pageHTML.querySelector('#s').length-1].value)
            } catch {
                changemessage('Product OOS, retrying...', 'orange')
                setTimeout(function(){
                    changemessage('Looking for product variation...', 'orange')
                    getLargest(url, callback)
                }, monitordelay)
            }
        } else if(shouldStop){
            changemessage('Task stopped!', 'red')
        }
    })
}

function addSize(pid, styleid, atcSize, q, callback){
    changemessage(`Adding to cart...`, 'orange')
    fetch(`https://www.supremenewyork.com/shop/${pid}/add`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": `utf8=%E2%9C%93&h=1&st=${styleid}&s=${atcSize}&qty=${q}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(response => response.json())
    .then(function(data){
        if(data.success && !shouldStop){
            callback()
        } else if(!data.success && !data.cart.in_stock && !shouldStop){
            changemessage('Product OOS, retrying...', 'orange')
            setTimeout(function(){
                changemessage('Looking for product variation...', 'orange')
                addSize(pid, styleid, atcSize, q, callback)
            }, monitordelay)
        } else if(!data.success && data.cart.in_stock && !shouldStop){
            changemessage('An unknown error occurred, retrying...', 'orange')
            setTimeout(function(){
                changemessage('Looking for product variation...', 'orange')
                addSize(pid, styleid, atcSize, q, callback)
            }, monitordelay)
        } else if(shouldStop){
            changemessage('Task stopped!', 'red')
        }
    });
}

function cart(){
    canCO = true
    if (canCO && !shouldStop) {
        setTimeout(function(){
            chrome.tabs.create({ url: `https://www.supremenewyork.com/checkout` })
            setTimeout(function(){
                chrome.tabs.executeScript({
                    code: `document.querySelector('#order_billing_name').value = "${name}";
                    document.querySelector('#order_email').value = "${email}";
                    document.querySelector('#order_tel').value = "${tel}";
                    document.querySelector('#bo').value = "${address}";
                    document.querySelector('#oba3').value = "${apt}";
                    document.querySelector('#order_billing_zip').value = "${zip}";
                    document.querySelector('#order_billing_city').value = "${city}";
                    document.querySelector("option[value='${state}']").selected = true;
                    document.querySelector('#rnsnckrn').value = "${cardnum}";
                    document.querySelector("option[value='${cardmonth}']").selected = true;
                    document.querySelector("option[value='${cardyear}']").selected = true;
                    document.querySelector('#orcer').value = "${cvv}";
                    setTimeout(function(){
                        document.querySelector('#cart-cc > fieldset > p:nth-child(6) > label > div > ins').click();
                        setTimeout(function(){
                            document.querySelector('#pay > input').click();
                            setTimeout(function(){
                                document.querySelector('#pay > input').click();
                                setTimeout(function(){
                                    document.querySelector('#pay > input').click();
                                    setTimeout(function(){
                                        document.querySelector('#pay > input').click();
                                    }, 115);
                                }, 115);
                            }, 115);
                        }, 115);
                    }, ${delay});`
                })
        
                changemessage('Checking out!', 'orange')
                canCO = false
            }, 150)
        }, 500)
    } else if(shouldStop){
        changemessage('Task stopped!', 'red')
        return false
    }
}
