import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { OutputAddressAdded } from '../events/output-address-added'

@Entity
export class OutputAddressEntity {
  public constructor(
    public id: UUID,
    readonly firstName: string,
    readonly lastName: string,
    readonly fullAddress: string
  ) {}

  @Reduces(OutputAddressAdded)
  public static reduceAddressAdded(
    event: OutputAddressAdded,
    currentSimplerAddressEntity?: OutputAddressEntity
  ): OutputAddressEntity {
    return new OutputAddressEntity(event.id, event.firstName, event.lastName, event.fullAddress)
  }
}
