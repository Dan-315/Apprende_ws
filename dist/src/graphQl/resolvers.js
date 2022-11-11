"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const access_controller_1 = require("../controllers/access.controller");
const grade_controller_1 = require("../controllers/grade.controller");
const user_controller_1 = require("../controllers/user.controller");
const suscrip_controller_1 = require("../controllers/suscrip.controller");
exports.resolvers = {
    Query: {
        default: () => 'GraphQL default execution',
        getUser: (_, { user }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield user_controller_1.userCont.getUser(user);
        }),
        getAccess: (_, { acces }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield access_controller_1.accesCont.getAcces(acces);
        }),
        getGrade: (_, { grade }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.getGrade(grade);
        }),
        getSuscrip: (_, { suscrip }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield suscrip_controller_1.suscripCont.getSuscrip(suscrip);
        }),
        getGradeWhitOut: (_, { grade }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.getGradeWhitOut(grade);
        }),
        getGradeSuscripted: (_, prams) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(prams);
            let { user, sucripted } = prams;
            console.log(user, sucripted);
            let suscrips = yield suscrip_controller_1.suscripCont.getSuscrip({ idUsuario: user.id });
            console.log(suscrips);
            let ids = [];
            for (let suscrip of suscrips) {
                if (suscrip.idCurso)
                    ids.push(suscrip.idCurso);
            }
            console.log(ids);
            return yield grade_controller_1.gradeCont.getGradeSuscripted(ids, user.id, sucripted);
        }),
        CountSuscripPerGrade: (_, { grade }) => __awaiter(void 0, void 0, void 0, function* () {
            let suscrips = yield suscrip_controller_1.suscripCont.getSuscrip({ idCurso: grade.id });
            return suscrips.length;
        }),
    },
    Mutation: {
        addUser: (_, { user }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield user_controller_1.userCont.addUser(user);
        }),
        updatUser: (_, { id, user }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield user_controller_1.userCont.updatUser(id, user);
        }),
        dellUser: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield user_controller_1.userCont.dellUser(id);
        }),
        addAcces: (_, { acces }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield access_controller_1.accesCont.addAcces(acces);
        }),
        updatAcces: (_, { id, acces }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield access_controller_1.accesCont.updatAcces(id, acces);
        }),
        dellAcces: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield access_controller_1.accesCont.dellAcces(id);
        }),
        addGrade: (_, { grade }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.addGrade(grade);
        }),
        updatGrade: (_, { id, grade }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.updatGrade(id, grade);
        }),
        dellGrade: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield grade_controller_1.gradeCont.dellGrade(id);
        }),
        addSuscrip: (_, { suscrip }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield suscrip_controller_1.suscripCont.addSuscrip(suscrip);
        }),
        updateSuscrip: (_, { id, suscrip }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield suscrip_controller_1.suscripCont.updateSuscrip(id, suscrip);
        }),
        dellSuscrip: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield suscrip_controller_1.suscripCont.dellSuscrip(id);
        }),
    }
};
