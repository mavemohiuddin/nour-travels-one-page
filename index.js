// Generators

const select = (type, name) => {

    if (type == 1) {
        return document.querySelector(name);
    } else {
        return document.querySelectorAll(name);
    }
}

// Automating hero banner

const hero_rotate = () => {
    Array.from(select(2, ".hero_banner")).map((item) => {
        let my_pos = parseInt(item.getAttribute("data-order"));
        let new_pos = my_pos + 1;
        if (new_pos > 3) {
            new_pos = 1;
        }
        item.setAttribute("data-order", new_pos)
    })
}

setInterval(() => {
    hero_rotate()
}, 10000)

// Animating the destination locations

select(1, ".dest_prev").addEventListener("click", () => location_prev());
select(1, ".dest_next").addEventListener("click", () => location_next());

const location_prev = () => {
    Array.from(select(2, ".location_item")).map((item) => {
        let my_pos = item.getAttribute("data-order");
        let new_pos = parseInt(my_pos) - 1;
        if (new_pos == 0) {
            new_pos = 5;
        };
        item.setAttribute("data-order", new_pos);
    })
}

const location_next = () => {
    Array.from(select(2, ".location_item")).map((item) => {
        let my_pos = item.getAttribute("data-order");
        let new_pos = parseInt(my_pos) + 1;
        if (new_pos == 6) {
            new_pos = 1;
        };
        item.setAttribute("data-order", new_pos);
    })
}