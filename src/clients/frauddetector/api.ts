import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FraudDetectorClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchCreateVariable(input: shapes.FraudDetectorBatchCreateVariableRequest): FraudDetectorBatchCreateVariable {
    return new FraudDetectorBatchCreateVariable(this, 'BatchCreateVariable', this.__resources, input);
  }

  public batchGetVariable(input: shapes.FraudDetectorBatchGetVariableRequest): FraudDetectorBatchGetVariable {
    return new FraudDetectorBatchGetVariable(this, 'BatchGetVariable', this.__resources, input);
  }

  public createDetectorVersion(input: shapes.FraudDetectorCreateDetectorVersionRequest): FraudDetectorCreateDetectorVersion {
    return new FraudDetectorCreateDetectorVersion(this, 'CreateDetectorVersion', this.__resources, input);
  }

  public createModel(input: shapes.FraudDetectorCreateModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateModel'),
        parameters: {
          modelId: input.modelId,
          modelType: input.modelType,
          description: input.description,
          eventTypeName: input.eventTypeName,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateModel', props);
  }

  public createModelVersion(input: shapes.FraudDetectorCreateModelVersionRequest): FraudDetectorCreateModelVersion {
    return new FraudDetectorCreateModelVersion(this, 'CreateModelVersion', this.__resources, input);
  }

  public createRule(input: shapes.FraudDetectorCreateRuleRequest): FraudDetectorCreateRule {
    return new FraudDetectorCreateRule(this, 'CreateRule', this.__resources, input);
  }

  public createVariable(input: shapes.FraudDetectorCreateVariableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVariable',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateVariable'),
        parameters: {
          name: input.name,
          dataType: input.dataType,
          dataSource: input.dataSource,
          defaultValue: input.defaultValue,
          description: input.description,
          variableType: input.variableType,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateVariable', props);
  }

  public deleteDetector(input: shapes.FraudDetectorDeleteDetectorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDetector',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteDetector'),
        parameters: {
          detectorId: input.detectorId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDetector', props);
  }

  public deleteDetectorVersion(input: shapes.FraudDetectorDeleteDetectorVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteDetectorVersion'),
        parameters: {
          detectorId: input.detectorId,
          detectorVersionId: input.detectorVersionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDetectorVersion', props);
  }

  public deleteEntityType(input: shapes.FraudDetectorDeleteEntityTypeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEntityType',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteEntityType'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEntityType', props);
  }

  public deleteEvent(input: shapes.FraudDetectorDeleteEventRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEvent',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteEvent'),
        parameters: {
          eventId: input.eventId,
          eventTypeName: input.eventTypeName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEvent', props);
  }

  public deleteEventType(input: shapes.FraudDetectorDeleteEventTypeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventType',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteEventType'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEventType', props);
  }

  public deleteExternalModel(input: shapes.FraudDetectorDeleteExternalModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExternalModel',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteExternalModel'),
        parameters: {
          modelEndpoint: input.modelEndpoint,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteExternalModel', props);
  }

  public deleteLabel(input: shapes.FraudDetectorDeleteLabelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLabel',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteLabel'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLabel', props);
  }

  public deleteModel(input: shapes.FraudDetectorDeleteModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteModel',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteModel'),
        parameters: {
          modelId: input.modelId,
          modelType: input.modelType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteModel', props);
  }

  public deleteModelVersion(input: shapes.FraudDetectorDeleteModelVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteModelVersion'),
        parameters: {
          modelId: input.modelId,
          modelType: input.modelType,
          modelVersionNumber: input.modelVersionNumber,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteModelVersion', props);
  }

  public deleteOutcome(input: shapes.FraudDetectorDeleteOutcomeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteOutcome',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteOutcome'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteOutcome', props);
  }

  public deleteRule(input: shapes.FraudDetectorDeleteRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRule',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteRule'),
        parameters: {
          rule: {
            detectorId: input.rule.detectorId,
            ruleId: input.rule.ruleId,
            ruleVersion: input.rule.ruleVersion,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRule', props);
  }

  public deleteVariable(input: shapes.FraudDetectorDeleteVariableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVariable',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DeleteVariable'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVariable', props);
  }

  public describeDetector(input: shapes.FraudDetectorDescribeDetectorRequest): FraudDetectorDescribeDetector {
    return new FraudDetectorDescribeDetector(this, 'DescribeDetector', this.__resources, input);
  }

  public describeModelVersions(input: shapes.FraudDetectorDescribeModelVersionsRequest): FraudDetectorDescribeModelVersions {
    return new FraudDetectorDescribeModelVersions(this, 'DescribeModelVersions', this.__resources, input);
  }

  public fetchDetectorVersion(input: shapes.FraudDetectorGetDetectorVersionRequest): FraudDetectorFetchDetectorVersion {
    return new FraudDetectorFetchDetectorVersion(this, 'FetchDetectorVersion', this.__resources, input);
  }

  public fetchDetectors(input: shapes.FraudDetectorGetDetectorsRequest): FraudDetectorFetchDetectors {
    return new FraudDetectorFetchDetectors(this, 'FetchDetectors', this.__resources, input);
  }

  public fetchEntityTypes(input: shapes.FraudDetectorGetEntityTypesRequest): FraudDetectorFetchEntityTypes {
    return new FraudDetectorFetchEntityTypes(this, 'FetchEntityTypes', this.__resources, input);
  }

  public fetchEventPrediction(input: shapes.FraudDetectorGetEventPredictionRequest): FraudDetectorFetchEventPrediction {
    return new FraudDetectorFetchEventPrediction(this, 'FetchEventPrediction', this.__resources, input);
  }

  public fetchEventTypes(input: shapes.FraudDetectorGetEventTypesRequest): FraudDetectorFetchEventTypes {
    return new FraudDetectorFetchEventTypes(this, 'FetchEventTypes', this.__resources, input);
  }

  public fetchExternalModels(input: shapes.FraudDetectorGetExternalModelsRequest): FraudDetectorFetchExternalModels {
    return new FraudDetectorFetchExternalModels(this, 'FetchExternalModels', this.__resources, input);
  }

  public fetchKmsEncryptionKey(): FraudDetectorFetchKmsEncryptionKey {
    return new FraudDetectorFetchKmsEncryptionKey(this, 'FetchKmsEncryptionKey', this.__resources);
  }

  public fetchLabels(input: shapes.FraudDetectorGetLabelsRequest): FraudDetectorFetchLabels {
    return new FraudDetectorFetchLabels(this, 'FetchLabels', this.__resources, input);
  }

  public fetchModelVersion(input: shapes.FraudDetectorGetModelVersionRequest): FraudDetectorFetchModelVersion {
    return new FraudDetectorFetchModelVersion(this, 'FetchModelVersion', this.__resources, input);
  }

  public fetchModels(input: shapes.FraudDetectorGetModelsRequest): FraudDetectorFetchModels {
    return new FraudDetectorFetchModels(this, 'FetchModels', this.__resources, input);
  }

  public fetchOutcomes(input: shapes.FraudDetectorGetOutcomesRequest): FraudDetectorFetchOutcomes {
    return new FraudDetectorFetchOutcomes(this, 'FetchOutcomes', this.__resources, input);
  }

  public fetchRules(input: shapes.FraudDetectorGetRulesRequest): FraudDetectorFetchRules {
    return new FraudDetectorFetchRules(this, 'FetchRules', this.__resources, input);
  }

  public fetchVariables(input: shapes.FraudDetectorGetVariablesRequest): FraudDetectorFetchVariables {
    return new FraudDetectorFetchVariables(this, 'FetchVariables', this.__resources, input);
  }

  public listTagsForResource(input: shapes.FraudDetectorListTagsForResourceRequest): FraudDetectorListTagsForResource {
    return new FraudDetectorListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putDetector(input: shapes.FraudDetectorPutDetectorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDetector',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.PutDetector'),
        parameters: {
          detectorId: input.detectorId,
          description: input.description,
          eventTypeName: input.eventTypeName,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDetector', props);
  }

  public putEntityType(input: shapes.FraudDetectorPutEntityTypeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEntityType',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.PutEntityType'),
        parameters: {
          name: input.name,
          description: input.description,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEntityType', props);
  }

  public putEventType(input: shapes.FraudDetectorPutEventTypeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEventType',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.PutEventType'),
        parameters: {
          name: input.name,
          description: input.description,
          eventVariables: input.eventVariables,
          labels: input.labels,
          entityTypes: input.entityTypes,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEventType', props);
  }

  public putExternalModel(input: shapes.FraudDetectorPutExternalModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putExternalModel',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.PutExternalModel'),
        parameters: {
          modelEndpoint: input.modelEndpoint,
          modelSource: input.modelSource,
          invokeModelEndpointRoleArn: input.invokeModelEndpointRoleArn,
          inputConfiguration: {
            eventTypeName: input.inputConfiguration.eventTypeName,
            format: input.inputConfiguration.format,
            useEventVariables: input.inputConfiguration.useEventVariables,
            jsonInputTemplate: input.inputConfiguration.jsonInputTemplate,
            csvInputTemplate: input.inputConfiguration.csvInputTemplate,
          },
          outputConfiguration: {
            format: input.outputConfiguration.format,
            jsonKeyToVariableMap: input.outputConfiguration.jsonKeyToVariableMap,
            csvIndexToVariableMap: input.outputConfiguration.csvIndexToVariableMap,
          },
          modelEndpointStatus: input.modelEndpointStatus,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutExternalModel', props);
  }

  public putKmsEncryptionKey(input: shapes.FraudDetectorPutKmsEncryptionKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putKmsEncryptionKey',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.PutKMSEncryptionKey'),
        parameters: {
          kmsEncryptionKeyArn: input.kmsEncryptionKeyArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutKMSEncryptionKey', props);
  }

  public putLabel(input: shapes.FraudDetectorPutLabelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLabel',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.PutLabel'),
        parameters: {
          name: input.name,
          description: input.description,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutLabel', props);
  }

  public putOutcome(input: shapes.FraudDetectorPutOutcomeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putOutcome',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.PutOutcome'),
        parameters: {
          name: input.name,
          description: input.description,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutOutcome', props);
  }

  public tagResource(input: shapes.FraudDetectorTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.TagResource'),
        parameters: {
          resourceARN: input.resourceARN,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.FraudDetectorUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UntagResource'),
        parameters: {
          resourceARN: input.resourceARN,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDetectorVersion(input: shapes.FraudDetectorUpdateDetectorVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateDetectorVersion'),
        parameters: {
          detectorId: input.detectorId,
          detectorVersionId: input.detectorVersionId,
          externalModelEndpoints: input.externalModelEndpoints,
          rules: input.rules,
          description: input.description,
          modelVersions: input.modelVersions,
          ruleExecutionMode: input.ruleExecutionMode,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDetectorVersion', props);
  }

  public updateDetectorVersionMetadata(input: shapes.FraudDetectorUpdateDetectorVersionMetadataRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorVersionMetadata',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateDetectorVersionMetadata'),
        parameters: {
          detectorId: input.detectorId,
          detectorVersionId: input.detectorVersionId,
          description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDetectorVersionMetadata', props);
  }

  public updateDetectorVersionStatus(input: shapes.FraudDetectorUpdateDetectorVersionStatusRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorVersionStatus',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateDetectorVersionStatus'),
        parameters: {
          detectorId: input.detectorId,
          detectorVersionId: input.detectorVersionId,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDetectorVersionStatus', props);
  }

  public updateModel(input: shapes.FraudDetectorUpdateModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModel',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateModel'),
        parameters: {
          modelId: input.modelId,
          modelType: input.modelType,
          description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateModel', props);
  }

  public updateModelVersion(input: shapes.FraudDetectorUpdateModelVersionRequest): FraudDetectorUpdateModelVersion {
    return new FraudDetectorUpdateModelVersion(this, 'UpdateModelVersion', this.__resources, input);
  }

  public updateModelVersionStatus(input: shapes.FraudDetectorUpdateModelVersionStatusRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModelVersionStatus',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateModelVersionStatus'),
        parameters: {
          modelId: input.modelId,
          modelType: input.modelType,
          modelVersionNumber: input.modelVersionNumber,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateModelVersionStatus', props);
  }

  public updateRuleMetadata(input: shapes.FraudDetectorUpdateRuleMetadataRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleMetadata',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateRuleMetadata'),
        parameters: {
          rule: {
            detectorId: input.rule.detectorId,
            ruleId: input.rule.ruleId,
            ruleVersion: input.rule.ruleVersion,
          },
          description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRuleMetadata', props);
  }

  public updateRuleVersion(input: shapes.FraudDetectorUpdateRuleVersionRequest): FraudDetectorUpdateRuleVersion {
    return new FraudDetectorUpdateRuleVersion(this, 'UpdateRuleVersion', this.__resources, input);
  }

  public updateVariable(input: shapes.FraudDetectorUpdateVariableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVariable',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateVariable'),
        parameters: {
          name: input.name,
          defaultValue: input.defaultValue,
          description: input.description,
          variableType: input.variableType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateVariable', props);
  }

}

export class FraudDetectorBatchCreateVariable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorBatchCreateVariableRequest) {
    super(scope, id);
  }

  public get errors(): shapes.FraudDetectorBatchCreateVariableError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateVariable',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.BatchCreateVariable.errors'),
        outputPath: 'errors',
        parameters: {
          variableEntries: this.input.variableEntries,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchCreateVariable.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.FraudDetectorBatchCreateVariableError[];
  }

}

export class FraudDetectorBatchGetVariable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorBatchGetVariableRequest) {
    super(scope, id);
  }

  public get variables(): shapes.FraudDetectorVariable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetVariable',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.BatchGetVariable.variables'),
        outputPath: 'variables',
        parameters: {
          names: this.input.names,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetVariable.variables', props);
    return resource.getResponseField('variables') as unknown as shapes.FraudDetectorVariable[];
  }

  public get errors(): shapes.FraudDetectorBatchGetVariableError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetVariable',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.BatchGetVariable.errors'),
        outputPath: 'errors',
        parameters: {
          names: this.input.names,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetVariable.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.FraudDetectorBatchGetVariableError[];
  }

}

export class FraudDetectorCreateDetectorVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorCreateDetectorVersionRequest) {
    super(scope, id);
  }

  public get detectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateDetectorVersion.detectorId'),
        outputPath: 'detectorId',
        parameters: {
          detectorId: this.input.detectorId,
          description: this.input.description,
          externalModelEndpoints: this.input.externalModelEndpoints,
          rules: this.input.rules,
          modelVersions: this.input.modelVersions,
          ruleExecutionMode: this.input.ruleExecutionMode,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorVersion.detectorId', props);
    return resource.getResponseField('detectorId') as unknown as string;
  }

  public get detectorVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateDetectorVersion.detectorVersionId'),
        outputPath: 'detectorVersionId',
        parameters: {
          detectorId: this.input.detectorId,
          description: this.input.description,
          externalModelEndpoints: this.input.externalModelEndpoints,
          rules: this.input.rules,
          modelVersions: this.input.modelVersions,
          ruleExecutionMode: this.input.ruleExecutionMode,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorVersion.detectorVersionId', props);
    return resource.getResponseField('detectorVersionId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateDetectorVersion.status'),
        outputPath: 'status',
        parameters: {
          detectorId: this.input.detectorId,
          description: this.input.description,
          externalModelEndpoints: this.input.externalModelEndpoints,
          rules: this.input.rules,
          modelVersions: this.input.modelVersions,
          ruleExecutionMode: this.input.ruleExecutionMode,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorVersion.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class FraudDetectorCreateModelVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorCreateModelVersionRequest) {
    super(scope, id);
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateModelVersion.modelId'),
        outputPath: 'modelId',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          trainingDataSource: this.input.trainingDataSource,
          trainingDataSchema: {
            modelVariables: this.input.trainingDataSchema.modelVariables,
            labelSchema: {
              labelMapper: this.input.trainingDataSchema.labelSchema.labelMapper,
            },
          },
          externalEventsDetail: {
            dataLocation: this.input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModelVersion.modelId', props);
    return resource.getResponseField('modelId') as unknown as string;
  }

  public get modelType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateModelVersion.modelType'),
        outputPath: 'modelType',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          trainingDataSource: this.input.trainingDataSource,
          trainingDataSchema: {
            modelVariables: this.input.trainingDataSchema.modelVariables,
            labelSchema: {
              labelMapper: this.input.trainingDataSchema.labelSchema.labelMapper,
            },
          },
          externalEventsDetail: {
            dataLocation: this.input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModelVersion.modelType', props);
    return resource.getResponseField('modelType') as unknown as string;
  }

  public get modelVersionNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateModelVersion.modelVersionNumber'),
        outputPath: 'modelVersionNumber',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          trainingDataSource: this.input.trainingDataSource,
          trainingDataSchema: {
            modelVariables: this.input.trainingDataSchema.modelVariables,
            labelSchema: {
              labelMapper: this.input.trainingDataSchema.labelSchema.labelMapper,
            },
          },
          externalEventsDetail: {
            dataLocation: this.input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModelVersion.modelVersionNumber', props);
    return resource.getResponseField('modelVersionNumber') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateModelVersion.status'),
        outputPath: 'status',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          trainingDataSource: this.input.trainingDataSource,
          trainingDataSchema: {
            modelVariables: this.input.trainingDataSchema.modelVariables,
            labelSchema: {
              labelMapper: this.input.trainingDataSchema.labelSchema.labelMapper,
            },
          },
          externalEventsDetail: {
            dataLocation: this.input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModelVersion.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class FraudDetectorCreateRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorCreateRuleRequest) {
    super(scope, id);
  }

  public get rule(): FraudDetectorCreateRuleRule {
    return new FraudDetectorCreateRuleRule(this, 'Rule', this.__resources, this.input);
  }

}

export class FraudDetectorCreateRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorCreateRuleRequest) {
    super(scope, id);
  }

  public get detectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateRule.rule.detectorId'),
        outputPath: 'rule.detectorId',
        parameters: {
          ruleId: this.input.ruleId,
          detectorId: this.input.detectorId,
          description: this.input.description,
          expression: this.input.expression,
          language: this.input.language,
          outcomes: this.input.outcomes,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRule.rule.detectorId', props);
    return resource.getResponseField('rule.detectorId') as unknown as string;
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateRule.rule.ruleId'),
        outputPath: 'rule.ruleId',
        parameters: {
          ruleId: this.input.ruleId,
          detectorId: this.input.detectorId,
          description: this.input.description,
          expression: this.input.expression,
          language: this.input.language,
          outcomes: this.input.outcomes,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRule.rule.ruleId', props);
    return resource.getResponseField('rule.ruleId') as unknown as string;
  }

  public get ruleVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.CreateRule.rule.ruleVersion'),
        outputPath: 'rule.ruleVersion',
        parameters: {
          ruleId: this.input.ruleId,
          detectorId: this.input.detectorId,
          description: this.input.description,
          expression: this.input.expression,
          language: this.input.language,
          outcomes: this.input.outcomes,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRule.rule.ruleVersion', props);
    return resource.getResponseField('rule.ruleVersion') as unknown as string;
  }

}

export class FraudDetectorDescribeDetector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorDescribeDetectorRequest) {
    super(scope, id);
  }

  public get detectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DescribeDetector.detectorId'),
        outputPath: 'detectorId',
        parameters: {
          detectorId: this.input.detectorId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detectorId', props);
    return resource.getResponseField('detectorId') as unknown as string;
  }

  public get detectorVersionSummaries(): shapes.FraudDetectorDetectorVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DescribeDetector.detectorVersionSummaries'),
        outputPath: 'detectorVersionSummaries',
        parameters: {
          detectorId: this.input.detectorId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detectorVersionSummaries', props);
    return resource.getResponseField('detectorVersionSummaries') as unknown as shapes.FraudDetectorDetectorVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DescribeDetector.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          detectorId: this.input.detectorId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DescribeDetector.arn'),
        outputPath: 'arn',
        parameters: {
          detectorId: this.input.detectorId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class FraudDetectorDescribeModelVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorDescribeModelVersionsRequest) {
    super(scope, id);
  }

  public get modelVersionDetails(): shapes.FraudDetectorModelVersionDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelVersions',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DescribeModelVersions.modelVersionDetails'),
        outputPath: 'modelVersionDetails',
        parameters: {
          modelId: this.input.modelId,
          modelVersionNumber: this.input.modelVersionNumber,
          modelType: this.input.modelType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelVersions.modelVersionDetails', props);
    return resource.getResponseField('modelVersionDetails') as unknown as shapes.FraudDetectorModelVersionDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelVersions',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.DescribeModelVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          modelId: this.input.modelId,
          modelVersionNumber: this.input.modelVersionNumber,
          modelType: this.input.modelType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorFetchDetectorVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetDetectorVersionRequest) {
    super(scope, id);
  }

  public get detectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.detectorId'),
        outputPath: 'detectorId',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.detectorId', props);
    return resource.getResponseField('detectorId') as unknown as string;
  }

  public get detectorVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.detectorVersionId'),
        outputPath: 'detectorVersionId',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.detectorVersionId', props);
    return resource.getResponseField('detectorVersionId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.description'),
        outputPath: 'description',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get externalModelEndpoints(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.externalModelEndpoints'),
        outputPath: 'externalModelEndpoints',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.externalModelEndpoints', props);
    return resource.getResponseField('externalModelEndpoints') as unknown as string[];
  }

  public get modelVersions(): shapes.FraudDetectorModelVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.modelVersions'),
        outputPath: 'modelVersions',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.modelVersions', props);
    return resource.getResponseField('modelVersions') as unknown as shapes.FraudDetectorModelVersion[];
  }

  public get rules(): shapes.FraudDetectorRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.rules'),
        outputPath: 'rules',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.rules', props);
    return resource.getResponseField('rules') as unknown as shapes.FraudDetectorRule[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.status'),
        outputPath: 'status',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.lastUpdatedTime'),
        outputPath: 'lastUpdatedTime',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.lastUpdatedTime', props);
    return resource.getResponseField('lastUpdatedTime') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.createdTime'),
        outputPath: 'createdTime',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.createdTime', props);
    return resource.getResponseField('createdTime') as unknown as string;
  }

  public get ruleExecutionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.ruleExecutionMode'),
        outputPath: 'ruleExecutionMode',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.ruleExecutionMode', props);
    return resource.getResponseField('ruleExecutionMode') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectorVersion.arn'),
        outputPath: 'arn',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectorVersion.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class FraudDetectorFetchDetectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetDetectorsRequest) {
    super(scope, id);
  }

  public get detectors(): shapes.FraudDetectorDetector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectors',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectors.detectors'),
        outputPath: 'detectors',
        parameters: {
          detectorId: this.input.detectorId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectors.detectors', props);
    return resource.getResponseField('detectors') as unknown as shapes.FraudDetectorDetector[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectors',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetDetectors.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          detectorId: this.input.detectorId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDetectors.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorFetchEntityTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetEntityTypesRequest) {
    super(scope, id);
  }

  public get entityTypes(): shapes.FraudDetectorEntityType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEntityTypes',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetEntityTypes.entityTypes'),
        outputPath: 'entityTypes',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEntityTypes.entityTypes', props);
    return resource.getResponseField('entityTypes') as unknown as shapes.FraudDetectorEntityType[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEntityTypes',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetEntityTypes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEntityTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorFetchEventPrediction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetEventPredictionRequest) {
    super(scope, id);
  }

  public get modelScores(): shapes.FraudDetectorModelScores[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventPrediction',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetEventPrediction.modelScores'),
        outputPath: 'modelScores',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
          eventId: this.input.eventId,
          eventTypeName: this.input.eventTypeName,
          entities: this.input.entities,
          eventTimestamp: this.input.eventTimestamp,
          eventVariables: this.input.eventVariables,
          externalModelEndpointDataBlobs: this.input.externalModelEndpointDataBlobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventPrediction.modelScores', props);
    return resource.getResponseField('modelScores') as unknown as shapes.FraudDetectorModelScores[];
  }

  public get ruleResults(): shapes.FraudDetectorRuleResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventPrediction',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetEventPrediction.ruleResults'),
        outputPath: 'ruleResults',
        parameters: {
          detectorId: this.input.detectorId,
          detectorVersionId: this.input.detectorVersionId,
          eventId: this.input.eventId,
          eventTypeName: this.input.eventTypeName,
          entities: this.input.entities,
          eventTimestamp: this.input.eventTimestamp,
          eventVariables: this.input.eventVariables,
          externalModelEndpointDataBlobs: this.input.externalModelEndpointDataBlobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventPrediction.ruleResults', props);
    return resource.getResponseField('ruleResults') as unknown as shapes.FraudDetectorRuleResult[];
  }

}

export class FraudDetectorFetchEventTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetEventTypesRequest) {
    super(scope, id);
  }

  public get eventTypes(): shapes.FraudDetectorEventType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventTypes',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetEventTypes.eventTypes'),
        outputPath: 'eventTypes',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventTypes.eventTypes', props);
    return resource.getResponseField('eventTypes') as unknown as shapes.FraudDetectorEventType[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventTypes',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetEventTypes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEventTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorFetchExternalModels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetExternalModelsRequest) {
    super(scope, id);
  }

  public get externalModels(): shapes.FraudDetectorExternalModel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExternalModels',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetExternalModels.externalModels'),
        outputPath: 'externalModels',
        parameters: {
          modelEndpoint: this.input.modelEndpoint,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExternalModels.externalModels', props);
    return resource.getResponseField('externalModels') as unknown as shapes.FraudDetectorExternalModel[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExternalModels',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetExternalModels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          modelEndpoint: this.input.modelEndpoint,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExternalModels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorFetchKmsEncryptionKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get kmsKey(): FraudDetectorFetchKmsEncryptionKeyKmsKey {
    return new FraudDetectorFetchKmsEncryptionKeyKmsKey(this, 'KmsKey', this.__resources);
  }

}

export class FraudDetectorFetchKmsEncryptionKeyKmsKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get kmsEncryptionKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKmsEncryptionKey',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetKMSEncryptionKey.kmsKey.kmsEncryptionKeyArn'),
        outputPath: 'kmsKey.kmsEncryptionKeyArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKMSEncryptionKey.kmsKey.kmsEncryptionKeyArn', props);
    return resource.getResponseField('kmsKey.kmsEncryptionKeyArn') as unknown as string;
  }

}

export class FraudDetectorFetchLabels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetLabelsRequest) {
    super(scope, id);
  }

  public get labels(): shapes.FraudDetectorLabel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabels',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetLabels.labels'),
        outputPath: 'labels',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLabels.labels', props);
    return resource.getResponseField('labels') as unknown as shapes.FraudDetectorLabel[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLabels',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetLabels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLabels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorFetchModelVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetModelVersionRequest) {
    super(scope, id);
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.modelId'),
        outputPath: 'modelId',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.modelId', props);
    return resource.getResponseField('modelId') as unknown as string;
  }

  public get modelType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.modelType'),
        outputPath: 'modelType',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.modelType', props);
    return resource.getResponseField('modelType') as unknown as string;
  }

  public get modelVersionNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.modelVersionNumber'),
        outputPath: 'modelVersionNumber',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.modelVersionNumber', props);
    return resource.getResponseField('modelVersionNumber') as unknown as string;
  }

  public get trainingDataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.trainingDataSource'),
        outputPath: 'trainingDataSource',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.trainingDataSource', props);
    return resource.getResponseField('trainingDataSource') as unknown as string;
  }

  public get trainingDataSchema(): FraudDetectorFetchModelVersionTrainingDataSchema {
    return new FraudDetectorFetchModelVersionTrainingDataSchema(this, 'TrainingDataSchema', this.__resources, this.input);
  }

  public get externalEventsDetail(): FraudDetectorFetchModelVersionExternalEventsDetail {
    return new FraudDetectorFetchModelVersionExternalEventsDetail(this, 'ExternalEventsDetail', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.status'),
        outputPath: 'status',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.arn'),
        outputPath: 'arn',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class FraudDetectorFetchModelVersionTrainingDataSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetModelVersionRequest) {
    super(scope, id);
  }

  public get modelVariables(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.trainingDataSchema.modelVariables'),
        outputPath: 'trainingDataSchema.modelVariables',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.trainingDataSchema.modelVariables', props);
    return resource.getResponseField('trainingDataSchema.modelVariables') as unknown as string[];
  }

  public get labelSchema(): FraudDetectorFetchModelVersionTrainingDataSchemaLabelSchema {
    return new FraudDetectorFetchModelVersionTrainingDataSchemaLabelSchema(this, 'LabelSchema', this.__resources, this.input);
  }

}

export class FraudDetectorFetchModelVersionTrainingDataSchemaLabelSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetModelVersionRequest) {
    super(scope, id);
  }

  public get labelMapper(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.trainingDataSchema.labelSchema.labelMapper'),
        outputPath: 'trainingDataSchema.labelSchema.labelMapper',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.trainingDataSchema.labelSchema.labelMapper', props);
    return resource.getResponseField('trainingDataSchema.labelSchema.labelMapper') as unknown as Record<string, string[]>;
  }

}

export class FraudDetectorFetchModelVersionExternalEventsDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetModelVersionRequest) {
    super(scope, id);
  }

  public get dataLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.externalEventsDetail.dataLocation'),
        outputPath: 'externalEventsDetail.dataLocation',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.externalEventsDetail.dataLocation', props);
    return resource.getResponseField('externalEventsDetail.dataLocation') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModelVersion.externalEventsDetail.dataAccessRoleArn'),
        outputPath: 'externalEventsDetail.dataAccessRoleArn',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          modelVersionNumber: this.input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModelVersion.externalEventsDetail.dataAccessRoleArn', props);
    return resource.getResponseField('externalEventsDetail.dataAccessRoleArn') as unknown as string;
  }

}

export class FraudDetectorFetchModels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetModelsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModels',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get models(): shapes.FraudDetectorModel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getModels',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetModels.models'),
        outputPath: 'models',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetModels.models', props);
    return resource.getResponseField('models') as unknown as shapes.FraudDetectorModel[];
  }

}

export class FraudDetectorFetchOutcomes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetOutcomesRequest) {
    super(scope, id);
  }

  public get outcomes(): shapes.FraudDetectorOutcome[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutcomes',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetOutcomes.outcomes'),
        outputPath: 'outcomes',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutcomes.outcomes', props);
    return resource.getResponseField('outcomes') as unknown as shapes.FraudDetectorOutcome[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutcomes',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetOutcomes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutcomes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorFetchRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetRulesRequest) {
    super(scope, id);
  }

  public get ruleDetails(): shapes.FraudDetectorRuleDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRules',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetRules.ruleDetails'),
        outputPath: 'ruleDetails',
        parameters: {
          ruleId: this.input.ruleId,
          detectorId: this.input.detectorId,
          ruleVersion: this.input.ruleVersion,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRules.ruleDetails', props);
    return resource.getResponseField('ruleDetails') as unknown as shapes.FraudDetectorRuleDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRules',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetRules.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          ruleId: this.input.ruleId,
          detectorId: this.input.detectorId,
          ruleVersion: this.input.ruleVersion,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRules.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorFetchVariables extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorGetVariablesRequest) {
    super(scope, id);
  }

  public get variables(): shapes.FraudDetectorVariable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVariables',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetVariables.variables'),
        outputPath: 'variables',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVariables.variables', props);
    return resource.getResponseField('variables') as unknown as shapes.FraudDetectorVariable[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVariables',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.GetVariables.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          name: this.input.name,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVariables.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.FraudDetectorTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceARN: this.input.resourceARN,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.FraudDetectorTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.ListTagsForResource.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceARN: this.input.resourceARN,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorUpdateModelVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorUpdateModelVersionRequest) {
    super(scope, id);
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateModelVersion.modelId'),
        outputPath: 'modelId',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          majorVersionNumber: this.input.majorVersionNumber,
          externalEventsDetail: {
            dataLocation: this.input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModelVersion.modelId', props);
    return resource.getResponseField('modelId') as unknown as string;
  }

  public get modelType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateModelVersion.modelType'),
        outputPath: 'modelType',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          majorVersionNumber: this.input.majorVersionNumber,
          externalEventsDetail: {
            dataLocation: this.input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModelVersion.modelType', props);
    return resource.getResponseField('modelType') as unknown as string;
  }

  public get modelVersionNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateModelVersion.modelVersionNumber'),
        outputPath: 'modelVersionNumber',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          majorVersionNumber: this.input.majorVersionNumber,
          externalEventsDetail: {
            dataLocation: this.input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModelVersion.modelVersionNumber', props);
    return resource.getResponseField('modelVersionNumber') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateModelVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateModelVersion.status'),
        outputPath: 'status',
        parameters: {
          modelId: this.input.modelId,
          modelType: this.input.modelType,
          majorVersionNumber: this.input.majorVersionNumber,
          externalEventsDetail: {
            dataLocation: this.input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateModelVersion.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class FraudDetectorUpdateRuleVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorUpdateRuleVersionRequest) {
    super(scope, id);
  }

  public get rule(): FraudDetectorUpdateRuleVersionRule {
    return new FraudDetectorUpdateRuleVersionRule(this, 'Rule', this.__resources, this.input);
  }

}

export class FraudDetectorUpdateRuleVersionRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.FraudDetectorUpdateRuleVersionRequest) {
    super(scope, id);
  }

  public get detectorId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateRuleVersion.rule.detectorId'),
        outputPath: 'rule.detectorId',
        parameters: {
          rule: {
            detectorId: this.input.rule.detectorId,
            ruleId: this.input.rule.ruleId,
            ruleVersion: this.input.rule.ruleVersion,
          },
          description: this.input.description,
          expression: this.input.expression,
          language: this.input.language,
          outcomes: this.input.outcomes,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleVersion.rule.detectorId', props);
    return resource.getResponseField('rule.detectorId') as unknown as string;
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateRuleVersion.rule.ruleId'),
        outputPath: 'rule.ruleId',
        parameters: {
          rule: {
            detectorId: this.input.rule.detectorId,
            ruleId: this.input.rule.ruleId,
            ruleVersion: this.input.rule.ruleVersion,
          },
          description: this.input.description,
          expression: this.input.expression,
          language: this.input.language,
          outcomes: this.input.outcomes,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleVersion.rule.ruleId', props);
    return resource.getResponseField('rule.ruleId') as unknown as string;
  }

  public get ruleVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleVersion',
        service: 'FraudDetector',
        physicalResourceId: cr.PhysicalResourceId.of('FraudDetector.UpdateRuleVersion.rule.ruleVersion'),
        outputPath: 'rule.ruleVersion',
        parameters: {
          rule: {
            detectorId: this.input.rule.detectorId,
            ruleId: this.input.rule.ruleId,
            ruleVersion: this.input.rule.ruleVersion,
          },
          description: this.input.description,
          expression: this.input.expression,
          language: this.input.language,
          outcomes: this.input.outcomes,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleVersion.rule.ruleVersion', props);
    return resource.getResponseField('rule.ruleVersion') as unknown as string;
  }

}

