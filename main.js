class LoremIpsum extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies convallis accumsan. Aenean sed condimentum nisi. Etiam posuere at dolor eu scelerisque. Proin at sapien pulvinar ligula imperdiet sagittis. In dapibus bibendum quam. Donec commodo justo ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis tempor lacinia nulla, accumsan consequat metus eleifend sed. Cras mollis et ex tincidunt sodales. In commodo, dolor eu luctus tristique, augue ipsum lacinia lacus, sit amet fringilla odio enim quis turpis. Aenean porttitor ullamcorper eros, ac vestibulum mi pellentesque pharetra. Sed tellus lectus, blandit et velit a, molestie ultricies erat. Nam fringilla ullamcorper odio eget commodo. Suspendisse ornare ornare lectus. Donec et mi iaculis, vestibulum mi sit amet, semper dui. Cras bibendum lacus ut ligula tristique aliquam. Maecenas convallis ultricies elit. In a luctus nibh. Suspendisse quis gravida orci, eu suscipit purus. Nunc elementum, lorem non viverra aliquam, nulla metus efficitur turpis, sed iaculis quam dolor vel magna. Cras finibus ex sit amet leo luctus pretium. Vestibulum nec facilisis quam. Donec eu justo dignissim, fermentum erat id, convallis diam.'
    }
}
customElements.define('lorem-ipsum', LoremIpsum)


class CardSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var content = this.innerHTML

        this.innerHTML = `
            <div class="card my-3">
                <div class="card-header fs-2 fw-bold py-3 px-4">
                    ${this.dataset.title}
                </div>

                <div class="card-body p-3">
                    ${content}
                </div>
            </div>
        `
    }
}
customElements.define('card-section', CardSection)


class ContactIcon extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <a href=${this.dataset.link}>
                <i class="bi bi-${this.dataset.icon} icon"></i>
            </a>
        `
    }
}
customElements.define('contact-icon', ContactIcon)


class ContactBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        // Create grid-like layout
        // reappend contacts
        // replace inner html with new one

        var container = document.createElement("div")
        container.className = "container"

        var row = document.createElement("div")
        row.className = "row justify-content-center p-1"
        container.appendChild(row)

        var contacts = this.children
        while (contacts.length > 0) {
            var col = document.createElement("div")
            col.className = "col-auto"
            col.appendChild(contacts[0])

            row.appendChild(col)
        }

        this.innerHTML = container.outerHTML
    }
}
customElements.define('contact-bar', ContactBar)


class ProfilePic extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="container p-1">
                <img src=${this.dataset.url} alt="Profile pic" class="profile-pic">
            </div>
        `
    }
}
customElements.define('profile-pic', ProfilePic)