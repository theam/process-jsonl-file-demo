import { EventHandler } from '@boostercloud/framework-core'
import { Register } from '@boostercloud/framework-types'
import { InputAddressAdded } from '../generated/input-address-added'
import { OutputAddressAdded } from '../events/output-address-added'

@EventHandler(InputAddressAdded)
export class AddressAddedEventHandler {
  public static async handle(event: InputAddressAdded, register: Register): Promise<void> {
    const outputAddressAdded = new OutputAddressAdded(
      event.id,
      event.firstName,
      event.lastName,
      `${event.address}, ${event.city}, ${event.state} - ${event.postalCode}`
    )

    register.events(outputAddressAdded)
  }
}
