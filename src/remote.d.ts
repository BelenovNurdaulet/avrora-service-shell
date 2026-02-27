declare module "catalog/ComponentPage" {
    const ComponentPage: React.ComponentType;
    export default ComponentPage;

}

declare module "catalog/handlers" {
    import type { RequestHandler } from "msw";
    export const handlers: RequestHandler[];
}