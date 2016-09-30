"use strict";
var message_1 = require('./message');
var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        this.messages.push(message);
        console.log(this.messages);
    };
    MessageService.prototype.getAllMessages = function () {
        return this.messages;
    };
    MessageService.prototype.editMessage = function (message) {
        this.messages[this.messages.indexOf(message)] = new message_1.Message('Edited Msg', null, 'Dummy');
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0JBQXdCLFdBRXhCLENBQUMsQ0FGa0M7QUFFbkM7SUFBQTtRQUNJLGFBQVEsR0FBYSxFQUFFLENBQUM7SUFrQjVCLENBQUM7SUFoQkcsbUNBQVUsR0FBVixVQUFXLE9BQWU7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWdCO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLGlCQUFPLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE9BQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxzQkFBYyxpQkFtQjFCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSdcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgICBtZXNzYWdlczpNZXNzYWdlW10gPSBbXTtcblxuICAgIGFkZE1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgZ2V0QWxsTWVzc2FnZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xuICAgIH1cblxuICAgIGVkaXRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UoJ0VkaXRlZCBNc2cnLCBudWxsLCAnRHVtbXknKTtcbiAgICB9XG5cbiAgICBkZWxldGVNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpXG4gICAgfVxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
