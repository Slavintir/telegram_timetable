import { Component } from './interfaces/component';

class ComponentService {
    async send(components: Component[]): Promise<void> {
        for (const component of components) {
            await this.sendComponent(component);
        }
    }

    async sendComponent(component: Component): Promise<void> {
        await component.send();
    }
}

export default new ComponentService();
