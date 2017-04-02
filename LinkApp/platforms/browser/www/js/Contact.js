function Contact(name, imgSrc)  {

    this.name = name;
    this.imgSrc = imgSrc;

    this.object = "";
    this.infoContent = "";

    this.init = function (parent)
    {
        this.object = document.createElement("li");
        var img = document.createElement("img");
        img.src = imgSrc;
        var header = document.createElement("h2");
        header.innerHTML = this.name;

        var headerContent = document.createElement("div");
        headerContent.appendChild(img);
        headerContent.appendChild(header);

        this.infoContent = document.createElement("div");
        this.infoContent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eos esse est excepturi " +
            "facere impedit ipsam, labore nam, natus placeat quas soluta vel veniam! Autem fugit ipsa minima numquam provident!";

        this.infoContent.classList.add("is-hidden");

        this.object.appendChild(headerContent);
        this.object.appendChild(this.infoContent);

        parent.appendChild(this.object);
    };
}