const express = require("express");
const { getAllPlansController, createPlanController, getPlanController, updatePlanController, deletePlanController } = require("../controller/planController");
const planRouter = express.Router();


planRouter.route("/")
.get(getAllPlansController)
.post(createPlanController)


// planRouter.get("/:planRoutes",)

// planRouter.patch("/:planRouter",)


// planRouter.delete("/:planRoutes",)

//alternative for above 3

planRouter.route("/:planRoutes")
.get(getPlanController)
.patch(updatePlanController)
.delete(deletePlanController)


module.exports = planRouter