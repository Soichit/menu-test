"use strict";
var router_1 = require("@angular/router");
var recipes_component_1 = require("./recipes/recipes.component");
var recipes_routes_1 = require("./recipes/recipes.routes");
exports.APP_ROUTES_PROVIDERS = [
    router_1.provideRouter([
        { path: '', redirectTo: '/recipes', pathMatch: 'full' },
        { path: 'recipes', component: recipes_component_1.RecipesComponent, children: recipes_routes_1.RECIPE_ROUTES }
    ])
];
//# sourceMappingURL=app.routes.js.map