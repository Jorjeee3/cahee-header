

function changeNavState () {
    const navigation = document.getElementById("navigation-list");
    let isOpened = navigation.classList.contains('opened');

    if (isOpened) {
        navigation.classList.remove("opened");
    }  
    else {
        navigation.classList.add("opened");
    }
}
