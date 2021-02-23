import { ReadModel, Projects } from '@boostercloud/framework-core'
import { UUID, ProjectionResult } from '@boostercloud/framework-types'
import { OutputAddressEntity } from '../entities/output-address-entity'

@ReadModel({
  authorize: 'all',
})
export class OutputAddress {
  public constructor(
    public id: UUID,
    readonly firstName: string,
    readonly lastName: string,
    readonly fullAddress: string
  ) {}

  @Projects(OutputAddressEntity, 'id')
  public static projectListeningAnalyticsEntity(
    entity: OutputAddressEntity,
    currentOutputAddress?: OutputAddress
  ): ProjectionResult<OutputAddress> {
    return new OutputAddress(entity.id, entity.firstName, entity.lastName, entity.fullAddress)
  }
}
