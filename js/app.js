let elHeader = document.querySelector("#header");

window.addEventListener("DOMContentLoaded", function() {
    LoadData()
})

function LoadData() {
    fetch("escape.json")
        .then(res => res.json())
        .then(data => {
            headers(data)
        });
}

function headers(data) {
    let elHeader = document.querySelector("#header");
    let headerBG = data.find((item) => {
        console.log(item.background);
        return item.background
    });
    elHeader.style.backgroundImage = `url(${headerBG.background})`
    let elNav = document.querySelector(".header__nav")

    let logo = data.find(item => {
        return item.logo
    });
    elHeader.style.backgroundImage = `url${logo.background}`

    console.log(logo.logo);
    elNav.innerHTML = `
        <h1 class="header__logo">${logo.logo}</h1>
    `;

    data.forEach(item => {
        if (item.list) {
            const headerList = document.createElement('ul')
            headerList.className = "header__list";

            item.list.forEach(element => {
                const li = document.createElement('li');
                li.className = "header__item";
                li.innerHTML = `<a href="#" class= "header__link">${element}</a>`
                headerList.appendChild(li);
            });

            elNav.appendChild(headerList); // Append the unordered list to the container
        }
    });

    let elTitle = data.find((item) => {
        return item.title, item.text
    });

    console.log(elTitle.title, elTitle.text);

    let headerBox = document.querySelector(".header__box");
    headerBox.innerHTML = ` 
    <h2 class = "header__title">${elTitle.title}</h2>
    <p class = "header__text">${elTitle.text}</p>
    <button class="header__btn">View Latest Posts</button>
    `;

    /* ########## "__" ##########*/

    /* smallHeader section start */
    data.forEach((item) => {
        if (item.headerList) {
            item.headerList.forEach((element) => {
                console.log(element);
                let smallList = document.querySelector(".smallHeader__list")

                let smallHeaderItem = document.createElement("li")

                smallHeaderItem.innerHTML = `
                  <a href="#" class="smallHeader__link">${element}</a>
                `
                smallList.appendChild(smallHeaderItem)
                console.log(smallList);
            });
        }
    });
    /* smallHeader section end */

    /* posts section start */

    let postsBox = data.find((item) => {
        return item.featuerd_title
    });
    console.log(postsBox.featuerd_title);
    document.querySelector(".posts__title").innerHTML = `${postsBox.featuerd_title}`

    data.forEach((item) => {
        if (item.featured_boxes) {
            item.featured_boxes.forEach((el) => {
                let postsGeneral = document.querySelector(".posts__general")

                let box = document.createElement("div");
                box.innerHTML = `
                    <div class="posts__cart" style="background-image:url(${el.background});">
                        <h3 class="posts__inner">${el.title}</h3>
                        <p class="posts__text">${el.desc}</p>

                        <ul class="posts__userList">
                            <li class="posts__userItem">
                                <img class="posts__userImg" src="${el.user.avatar}" alt="">
                                <p class="posts__userName">${el.user.name}</p>
                            </li>
                            <p class="posts__day">${el.user.date}</p>
                        </ul>
                    </div>
                  
                    `
                postsGeneral.appendChild(box)
                console.log(postsGeneral);
                // console.log(el.user.avatar);
                // console.log(el.title);
            })
        }
    });

    /* posts section end */

    /* recent section start */

    let recentBox = data.find((item) => {
        return item.recent_title
    })
    document.querySelector(".recent__title").innerHTML = `${recentBox.recent_title}`
    console.log(recentBox.recent_title);

    data.forEach((item) => {
        if (item.recent_boxes) {
            item.recent_boxes.forEach((el) => {
                // console.log(el.user.date);
                let recentBox = document.querySelector(".recent__general");

                let box = document.createElement("div");
                box.innerHTML = `
                <div class="recent__cart">
                        <img src="${el.img}" alt="" class="recent__img">
                        <div class ="recent__dataBox">
                            <h4 class="recent__inner">${el.title}</h4>
                            <p class="recent__text">${el.desc}</p>

                            <hr class="recent__line">
                            <ul class="recent__userList">
                                <li class="recent__userItem">
                                    <img src="${el.user.avatar}" alt="" class="recent__userImg">
                                    <p class="recent__userName">${el.user.name}</p>
                                </li>

                                <p class="recent__day">${el.user.date}</p>
                            </ul>
                        </div>
                    </div> 
                `
                recentBox.appendChild(box)
            })
        }
    })

    /* recent section end */


    /* footer section end */

    let footer = data.find((item) => {
        return item.footer_title, item.footer_background, item.footer_logo, item.footerList
    })
    let elFooter = document.querySelector("#footer").style.backgroundImage = `url(${footer.footer_background})`

    document.querySelector(".footer__title").innerHTML = `${footer.footer_title}`
    console.log(elFooter);

    document.querySelector(".footer__logo").innerHTML = `${footer.footer_logo}`

    footer.footerList.forEach((item) => {
            console.log(item);
            let footerListBox = document.querySelector(".footer__list");
            let footerItem = document.createElement("li")
            footerItem.innerHTML = `
                    <a href="#" class="footer__links">${item}</a>

        `
            console.log(footerItem);
            footerListBox.appendChild(footerItem)
        })
        /* footer section end */
}