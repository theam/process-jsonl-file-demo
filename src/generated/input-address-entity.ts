import { Entity, Reduces } from '@boostercloud/framework-core'
import { InputAddressAdded } from './input-address-added'
import { UUID } from '@boostercloud/framework-types'

@Entity
export class InputAddressEntity {
  public constructor(
    public id: UUID,
    readonly firstName: string,
    readonly lastName: string,
    readonly address: string,
    readonly city: string,
    readonly state: string,
    readonly postalCode: string
  ) {}

  @Reduces(InputAddressAdded)
  public static reduceAddressAdded(
    event: InputAddressAdded,
    currentAddressEntity?: InputAddressEntity
  ): InputAddressEntity {
    return new InputAddressEntity(
      event.id,
      event.firstName,
      event.lastName,
      event.address,
      event.city,
      event.state,
      event.postalCode
    )
  }
}
