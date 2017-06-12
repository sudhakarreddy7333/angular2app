"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddEmpModel = (function () {
    function AddEmpModel(name, email, dept, gender, phoneno, dob, id, sports) {
        if (name === void 0) { name = ""; }
        if (email === void 0) { email = ""; }
        if (dept === void 0) { dept = ""; }
        if (gender === void 0) { gender = ""; }
        if (phoneno === void 0) { phoneno = null; }
        if (dob === void 0) { dob = ""; }
        if (id === void 0) { id = null; }
        if (sports === void 0) { sports = null; }
        this.name = name;
        this.email = email;
        this.dept = dept;
        this.gender = gender;
        this.phoneno = phoneno;
        this.dob = dob;
        this.id = id;
        this.sports = sports;
    }
    return AddEmpModel;
}());
exports.AddEmpModel = AddEmpModel;
//# sourceMappingURL=add-emp.model.js.map