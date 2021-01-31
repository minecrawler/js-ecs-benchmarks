export default {
    name: 'Velocity',
    iterations: 10000,
    setup(ctx) {
        ctx.setup();
    },
    perform(ctx) {
        const entity = ctx.createEntity();

        ctx.addPositionComponent(entity);
        ctx.addVelocityComponent(entity);

        ctx.updateMovementSystem();
    }
};
