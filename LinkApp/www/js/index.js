/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var contacts = [];

var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        var contactContainer = document.getElementById("contacts");
        var contactButton = document.getElementById("btn-contact");

        contactContainer.addEventListener("touchStart", this.liTouchStart);
        contactContainer.addEventListener("touchEnd", this.liTouchEnd);
        contactButton.addEventListener("click", this.buttonClickHandler)


        var contact1 = new Contact("Klaas", "img/logo.png");
        var contact2 = new Contact("Klaas", "img/logo.png");
        var contact3 = new Contact("Klaas", "img/logo.png");

        contacts.push(contact1);
        contacts.push(contact2);
        contacts.push(contact3);

        for(var i = 0; i < contacts.length; i++)
        {
            contacts[i].init(contactContainer);
            contacts[i].object.addEventListener("click", this.liClickHandler);
        }
    },
    liTouchStart: function (e) {
        
        e.preventDefault()
    },
    
    liTouchEnd: function (e) {
        
        e.preventDefault();
    },

    liClickHandler: function (e) {

        e.preventDefault();

        var target = e.currentTarget;

        for(var i = 0; i < contacts.length; i++)
        {
            if(target.isSameNode(contacts[i].object))
            {
                console.log("its the same node");
                contacts[i].object.classList.toggle("is-hidden");
                contacts[i].infoContent.classList.toggle("is-hidden");
            }
            else
            {
                contacts[i].object.classList.toggle("is-hidden");
            }
        }
    },

    buttonClickHandler: function (e) {

        e.preventDefault();

        var target = e.currentTarget;

        target.classList.toggle("is-open");
        target.parentNode.classList.toggle("is-open");
    }
};

app.initialize();