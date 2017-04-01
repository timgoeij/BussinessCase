function Contact(name, imgSrc)  {

    this.name = name;
    this.imgSrc = imgSrc;

    this.object = "";

    this.init = function (parent)
    {
        console.log("initialize");

        this.object = document.createElement("li");
        var img = document.createElement("img");
        img.src = imgSrc;
        var header = document.createElement("h2");
        header.innerHTML = this.name;

        var headerContent = document.createElement("div");
        headerContent.appendChild(img);
        headerContent.appendChild(header);

        var infoContent = document.createElement("div");
        infoContent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eos esse est excepturi " +
            "facere impedit ipsam, labore nam, natus placeat quas soluta vel veniam! Autem fugit ipsa minima numquam provident!";

        this.object.appendChild(headerContent);
        this.object.appendChild(infoContent);

        parent.appendChild(this.object);

        console.log("contacts initialized");
    };
}