"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var addemployees = [{
                "name": "",
                "email": "",
                "dept": "",
                "gender": "",
                "phoneno": "",
                "dob": "",
                "id": ""
            }];
        return { addemployees: addemployees };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map