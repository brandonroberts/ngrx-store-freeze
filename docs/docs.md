# Additional Documentation

### Router Store Compatibility

`@ngrx/router-store` provides a snapshot of the `RouterState` during each navigation cycle. This snapshot is a complex mutable object that can cause issues when used with `ngrx-store-freeze`. In order to use this library along with `@ngrx/router-store`, you need to implement a custom serializer for the `RouterStateSnapshot`. See the [@ngrx/router-store documentation](https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer) for instructions for creating a custom serializer.