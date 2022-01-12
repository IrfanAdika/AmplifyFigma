import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AmplifyModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class AmplifyModel {
  readonly id: string;
  readonly title?: string;
  readonly price?: string;
  readonly description?: string;
  readonly image_url?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AmplifyModel, AmplifyModelMetaData>);
  static copyOf(source: AmplifyModel, mutator: (draft: MutableModel<AmplifyModel, AmplifyModelMetaData>) => MutableModel<AmplifyModel, AmplifyModelMetaData> | void): AmplifyModel;
}