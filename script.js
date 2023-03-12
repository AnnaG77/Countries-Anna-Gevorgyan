let section = document.querySelector('section')
let main = document.querySelector('.main')
let modal = document.querySelector('.modal')
let head = document.querySelector('.head')
let code = document.querySelector('.code')
let img1 = document.querySelector('img')
let region1 = document.querySelector('.region')
let nativeName1 = document.querySelector('.nativeName')
let languages1 = document.querySelector('.languages')
let capital1 = document.querySelector('.capital')
let borders1 =document.querySelector('.borders')
let callingCodes1 = document.querySelector('.callingCodes')
let population1 = document.querySelector('.population')
let languageName = ''
fetch("https://restcountries.com/v2/all")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.map(({ name, flag, alpha2Code, region, nativeName, languages, capital, borders, callingCodes, population }) => {
            let div = document.createElement('img')
            section.append(div)
            div.setAttribute('class', 'countries')
            div.setAttribute('src', flag)
            div.addEventListener('click', () => {
                main.style.display = 'flex'
                head.innerHTML = name
                img1.setAttribute('src', flag)
                code.innerHTML = `Code: ${alpha2Code}`
                region1.innerHTML = `Region: ${region}`
                nativeName1.innerHTML = `NativeName: ${nativeName}`
                languages.map(({ nativeName }) => {
                    console.log(nativeName);
                    languageName += nativeName + '  '
                    languages1.innerHTML = `languages: ${languageName}`
                })
                capital1.innerHTML = `Capital: ${capital}`
                if (borders) {
                    borders1.innerHTML = `Borders: ${borders}`
                }
                callingCodes1.innerHTML = `CallingCodes: ${callingCodes}`
                population1.innerHTML = `Population: ${population}`
            })
        })
    })

main.addEventListener('click', () => {
    main.style.display = 'none'
    languageName = ''
    borders1.innerHTML = ''
})
modal.addEventListener('click', (e) => {
    e.stopPropagation()
})