//for in loop

const languages = {
    js : 'javascript',
    py : 'python',
    rb : 'ruby',
    cpp : 'c++'
}

for (const lang in languages) {
    //console.log(`${lang} is extension of ${languages[lang]}`);
}

const programming = ["js","py","rb","cpp"];

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('RU',"Russia")
map.set('FR',"France")

for (const key in map) {
    console.log(key);
}