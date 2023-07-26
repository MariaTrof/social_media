import { ResolveOptions } from "webpack";

export function buildResolves(): ResolveOptions{

    return {

        extensions: ['.js', '.ts', '.tsx'],

    };

}