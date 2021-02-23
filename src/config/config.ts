import { Booster } from '@boostercloud/framework-core'
import { BoosterConfig } from '@boostercloud/framework-types'
import { Provider } from '@boostercloud/framework-provider-aws'

Booster.configure('production', (config: BoosterConfig): void => {
  config.appName = 'process-jsonl-file-demo'
  config.provider = Provider([
    {
      packageName: '@boostercloud/rocket-batch-file-process-aws-infrastructure',
      parameters: {
        config: {
          bucketName: 'process-big-file-booster-rocket',
          chunkSize: '2',
        },
        rowEvent: {
          entityId: 'id',
          eventTypeName: 'InputAddressAdded',
          entityTypeName: 'InputAddressEntity',
        },
      },
    },
  ])
})
