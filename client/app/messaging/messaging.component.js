"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_service_1 = require('./message.service');
var MessagingComponent = (function () {
    function MessagingComponent(messageService) {
        this.messageService = messageService;
        this.user = "";
        this.message = "";
        this.messages = [];
    }
    MessagingComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageService.getMessages()
            .then(function (messages) { return _this.messages = messages; });
    };
    MessagingComponent.prototype.sendMessage = function () {
        var _this = this;
        this.messageService.sendMessage(this.user, this.message)
            .then(function () {
            _this.message = "";
            _this.getMessages();
        });
    };
    MessagingComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessagingComponent = __decorate([
        core_1.Component({
            selector: 'messaging',
            templateUrl: 'app/messaging/messaging.component.html',
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessagingComponent);
    return MessagingComponent;
}());
exports.MessagingComponent = MessagingComponent;
//# sourceMappingURL=messaging.component.js.map