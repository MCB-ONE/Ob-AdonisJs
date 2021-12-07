/**
 * Contract source: https://git.io/JOdz5
 *
 * Feel free to let us know via PR, if you find something broken in this
 * file.
 */

import Usuario from 'App/Models/Usuario';

declare module '@ioc:Adonis/Addons/Auth' {
  interface ProvidersList {
    user: {
      implementation: LucidProviderContract<typeof Usuario>;
      config: LucidProviderConfig<typeof Usuario>;
    };
  }
  interface GuardsList {
    api: {
      implementation: OATGuardContract<'user', 'api'>;
      config: OATGuardConfig<'user'>;
    };
  }
}
