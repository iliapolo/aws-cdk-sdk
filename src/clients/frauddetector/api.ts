import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FraudDetectorClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchCreateVariable(input: shapes.FraudDetectorBatchCreateVariableRequest): FraudDetectorResponsesBatchCreateVariable {
    return new FraudDetectorResponsesBatchCreateVariable(this, this.__resources, input);
  }

  public batchGetVariable(input: shapes.FraudDetectorBatchGetVariableRequest): FraudDetectorResponsesBatchGetVariable {
    return new FraudDetectorResponsesBatchGetVariable(this, this.__resources, input);
  }

  public createDetectorVersion(input: shapes.FraudDetectorCreateDetectorVersionRequest): FraudDetectorResponsesCreateDetectorVersion {
    return new FraudDetectorResponsesCreateDetectorVersion(this, this.__resources, input);
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

  public createModelVersion(input: shapes.FraudDetectorCreateModelVersionRequest): FraudDetectorResponsesCreateModelVersion {
    return new FraudDetectorResponsesCreateModelVersion(this, this.__resources, input);
  }

  public createRule(input: shapes.FraudDetectorCreateRuleRequest): FraudDetectorResponsesCreateRule {
    return new FraudDetectorResponsesCreateRule(this, this.__resources, input);
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

  public describeDetector(input: shapes.FraudDetectorDescribeDetectorRequest): FraudDetectorResponsesDescribeDetector {
    return new FraudDetectorResponsesDescribeDetector(this, this.__resources, input);
  }

  public describeModelVersions(input: shapes.FraudDetectorDescribeModelVersionsRequest): FraudDetectorResponsesDescribeModelVersions {
    return new FraudDetectorResponsesDescribeModelVersions(this, this.__resources, input);
  }

  public fetchDetectorVersion(input: shapes.FraudDetectorGetDetectorVersionRequest): FraudDetectorResponsesFetchDetectorVersion {
    return new FraudDetectorResponsesFetchDetectorVersion(this, this.__resources, input);
  }

  public fetchDetectors(input: shapes.FraudDetectorGetDetectorsRequest): FraudDetectorResponsesFetchDetectors {
    return new FraudDetectorResponsesFetchDetectors(this, this.__resources, input);
  }

  public fetchEntityTypes(input: shapes.FraudDetectorGetEntityTypesRequest): FraudDetectorResponsesFetchEntityTypes {
    return new FraudDetectorResponsesFetchEntityTypes(this, this.__resources, input);
  }

  public fetchEventPrediction(input: shapes.FraudDetectorGetEventPredictionRequest): FraudDetectorResponsesFetchEventPrediction {
    return new FraudDetectorResponsesFetchEventPrediction(this, this.__resources, input);
  }

  public fetchEventTypes(input: shapes.FraudDetectorGetEventTypesRequest): FraudDetectorResponsesFetchEventTypes {
    return new FraudDetectorResponsesFetchEventTypes(this, this.__resources, input);
  }

  public fetchExternalModels(input: shapes.FraudDetectorGetExternalModelsRequest): FraudDetectorResponsesFetchExternalModels {
    return new FraudDetectorResponsesFetchExternalModels(this, this.__resources, input);
  }

  public fetchKmsEncryptionKey(): FraudDetectorResponsesFetchKmsEncryptionKey {
    return new FraudDetectorResponsesFetchKmsEncryptionKey(this, this.__resources);
  }

  public fetchLabels(input: shapes.FraudDetectorGetLabelsRequest): FraudDetectorResponsesFetchLabels {
    return new FraudDetectorResponsesFetchLabels(this, this.__resources, input);
  }

  public fetchModelVersion(input: shapes.FraudDetectorGetModelVersionRequest): FraudDetectorResponsesFetchModelVersion {
    return new FraudDetectorResponsesFetchModelVersion(this, this.__resources, input);
  }

  public fetchModels(input: shapes.FraudDetectorGetModelsRequest): FraudDetectorResponsesFetchModels {
    return new FraudDetectorResponsesFetchModels(this, this.__resources, input);
  }

  public fetchOutcomes(input: shapes.FraudDetectorGetOutcomesRequest): FraudDetectorResponsesFetchOutcomes {
    return new FraudDetectorResponsesFetchOutcomes(this, this.__resources, input);
  }

  public fetchRules(input: shapes.FraudDetectorGetRulesRequest): FraudDetectorResponsesFetchRules {
    return new FraudDetectorResponsesFetchRules(this, this.__resources, input);
  }

  public fetchVariables(input: shapes.FraudDetectorGetVariablesRequest): FraudDetectorResponsesFetchVariables {
    return new FraudDetectorResponsesFetchVariables(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.FraudDetectorListTagsForResourceRequest): FraudDetectorResponsesListTagsForResource {
    return new FraudDetectorResponsesListTagsForResource(this, this.__resources, input);
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

  public updateModelVersion(input: shapes.FraudDetectorUpdateModelVersionRequest): FraudDetectorResponsesUpdateModelVersion {
    return new FraudDetectorResponsesUpdateModelVersion(this, this.__resources, input);
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

  public updateRuleVersion(input: shapes.FraudDetectorUpdateRuleVersionRequest): FraudDetectorResponsesUpdateRuleVersion {
    return new FraudDetectorResponsesUpdateRuleVersion(this, this.__resources, input);
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

export class FraudDetectorResponsesBatchCreateVariable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorBatchCreateVariableRequest) {
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
          variableEntries: this.__input.variableEntries,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateVariable.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.FraudDetectorBatchCreateVariableError[];
  }

}

export class FraudDetectorResponsesBatchGetVariable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorBatchGetVariableRequest) {
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
          names: this.__input.names,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetVariable.variables', props);
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
          names: this.__input.names,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetVariable.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.FraudDetectorBatchGetVariableError[];
  }

}

export class FraudDetectorResponsesCreateDetectorVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorCreateDetectorVersionRequest) {
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
          detectorId: this.__input.detectorId,
          description: this.__input.description,
          externalModelEndpoints: this.__input.externalModelEndpoints,
          rules: this.__input.rules,
          modelVersions: this.__input.modelVersions,
          ruleExecutionMode: this.__input.ruleExecutionMode,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorVersion.detectorId', props);
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
          detectorId: this.__input.detectorId,
          description: this.__input.description,
          externalModelEndpoints: this.__input.externalModelEndpoints,
          rules: this.__input.rules,
          modelVersions: this.__input.modelVersions,
          ruleExecutionMode: this.__input.ruleExecutionMode,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorVersion.detectorVersionId', props);
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
          detectorId: this.__input.detectorId,
          description: this.__input.description,
          externalModelEndpoints: this.__input.externalModelEndpoints,
          rules: this.__input.rules,
          modelVersions: this.__input.modelVersions,
          ruleExecutionMode: this.__input.ruleExecutionMode,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorVersion.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class FraudDetectorResponsesCreateModelVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorCreateModelVersionRequest) {
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          trainingDataSource: this.__input.trainingDataSource,
          trainingDataSchema: {
            modelVariables: this.__input.trainingDataSchema.modelVariables,
            labelSchema: {
              labelMapper: this.__input.trainingDataSchema.labelSchema.labelMapper,
            },
          },
          externalEventsDetail: {
            dataLocation: this.__input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.__input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModelVersion.modelId', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          trainingDataSource: this.__input.trainingDataSource,
          trainingDataSchema: {
            modelVariables: this.__input.trainingDataSchema.modelVariables,
            labelSchema: {
              labelMapper: this.__input.trainingDataSchema.labelSchema.labelMapper,
            },
          },
          externalEventsDetail: {
            dataLocation: this.__input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.__input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModelVersion.modelType', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          trainingDataSource: this.__input.trainingDataSource,
          trainingDataSchema: {
            modelVariables: this.__input.trainingDataSchema.modelVariables,
            labelSchema: {
              labelMapper: this.__input.trainingDataSchema.labelSchema.labelMapper,
            },
          },
          externalEventsDetail: {
            dataLocation: this.__input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.__input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModelVersion.modelVersionNumber', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          trainingDataSource: this.__input.trainingDataSource,
          trainingDataSchema: {
            modelVariables: this.__input.trainingDataSchema.modelVariables,
            labelSchema: {
              labelMapper: this.__input.trainingDataSchema.labelSchema.labelMapper,
            },
          },
          externalEventsDetail: {
            dataLocation: this.__input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.__input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModelVersion.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class FraudDetectorResponsesCreateRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorCreateRuleRequest) {
  }

  public get rule(): FraudDetectorResponsesCreateRuleRule {
    return new FraudDetectorResponsesCreateRuleRule(this.__scope, this.__resources, this.__input);
  }

}

export class FraudDetectorResponsesCreateRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorCreateRuleRequest) {
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
          ruleId: this.__input.ruleId,
          detectorId: this.__input.detectorId,
          description: this.__input.description,
          expression: this.__input.expression,
          language: this.__input.language,
          outcomes: this.__input.outcomes,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRule.rule.detectorId', props);
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
          ruleId: this.__input.ruleId,
          detectorId: this.__input.detectorId,
          description: this.__input.description,
          expression: this.__input.expression,
          language: this.__input.language,
          outcomes: this.__input.outcomes,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRule.rule.ruleId', props);
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
          ruleId: this.__input.ruleId,
          detectorId: this.__input.detectorId,
          description: this.__input.description,
          expression: this.__input.expression,
          language: this.__input.language,
          outcomes: this.__input.outcomes,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRule.rule.ruleVersion', props);
    return resource.getResponseField('rule.ruleVersion') as unknown as string;
  }

}

export class FraudDetectorResponsesDescribeDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorDescribeDetectorRequest) {
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
          detectorId: this.__input.detectorId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detectorId', props);
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
          detectorId: this.__input.detectorId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detectorVersionSummaries', props);
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
          detectorId: this.__input.detectorId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.nextToken', props);
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
          detectorId: this.__input.detectorId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class FraudDetectorResponsesDescribeModelVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorDescribeModelVersionsRequest) {
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
          modelId: this.__input.modelId,
          modelVersionNumber: this.__input.modelVersionNumber,
          modelType: this.__input.modelType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelVersions.modelVersionDetails', props);
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
          modelId: this.__input.modelId,
          modelVersionNumber: this.__input.modelVersionNumber,
          modelType: this.__input.modelType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchDetectorVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetDetectorVersionRequest) {
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.detectorId', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.detectorVersionId', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.description', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.externalModelEndpoints', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.modelVersions', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.rules', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.status', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.lastUpdatedTime', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.createdTime', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.ruleExecutionMode', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorVersion.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchDetectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetDetectorsRequest) {
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
          detectorId: this.__input.detectorId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectors.detectors', props);
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
          detectorId: this.__input.detectorId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectors.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchEntityTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetEntityTypesRequest) {
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEntityTypes.entityTypes', props);
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEntityTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchEventPrediction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetEventPredictionRequest) {
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
          eventId: this.__input.eventId,
          eventTypeName: this.__input.eventTypeName,
          entities: this.__input.entities,
          eventTimestamp: this.__input.eventTimestamp,
          eventVariables: this.__input.eventVariables,
          externalModelEndpointDataBlobs: this.__input.externalModelEndpointDataBlobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventPrediction.modelScores', props);
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
          detectorId: this.__input.detectorId,
          detectorVersionId: this.__input.detectorVersionId,
          eventId: this.__input.eventId,
          eventTypeName: this.__input.eventTypeName,
          entities: this.__input.entities,
          eventTimestamp: this.__input.eventTimestamp,
          eventVariables: this.__input.eventVariables,
          externalModelEndpointDataBlobs: this.__input.externalModelEndpointDataBlobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventPrediction.ruleResults', props);
    return resource.getResponseField('ruleResults') as unknown as shapes.FraudDetectorRuleResult[];
  }

}

export class FraudDetectorResponsesFetchEventTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetEventTypesRequest) {
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventTypes.eventTypes', props);
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchExternalModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetExternalModelsRequest) {
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
          modelEndpoint: this.__input.modelEndpoint,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExternalModels.externalModels', props);
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
          modelEndpoint: this.__input.modelEndpoint,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExternalModels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchKmsEncryptionKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get kmsKey(): FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey {
    return new FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey(this.__scope, this.__resources);
  }

}

export class FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKMSEncryptionKey.kmsKey.kmsEncryptionKeyArn', props);
    return resource.getResponseField('kmsKey.kmsEncryptionKeyArn') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchLabels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetLabelsRequest) {
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabels.labels', props);
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLabels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchModelVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetModelVersionRequest) {
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.modelId', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.modelType', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.modelVersionNumber', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.trainingDataSource', props);
    return resource.getResponseField('trainingDataSource') as unknown as string;
  }

  public get trainingDataSchema(): FraudDetectorResponsesFetchModelVersionTrainingDataSchema {
    return new FraudDetectorResponsesFetchModelVersionTrainingDataSchema(this.__scope, this.__resources, this.__input);
  }

  public get externalEventsDetail(): FraudDetectorResponsesFetchModelVersionExternalEventsDetail {
    return new FraudDetectorResponsesFetchModelVersionExternalEventsDetail(this.__scope, this.__resources, this.__input);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.status', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchModelVersionTrainingDataSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetModelVersionRequest) {
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.trainingDataSchema.modelVariables', props);
    return resource.getResponseField('trainingDataSchema.modelVariables') as unknown as string[];
  }

  public get labelSchema(): FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema {
    return new FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema(this.__scope, this.__resources, this.__input);
  }

}

export class FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetModelVersionRequest) {
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.trainingDataSchema.labelSchema.labelMapper', props);
    return resource.getResponseField('trainingDataSchema.labelSchema.labelMapper') as unknown as Record<string, string[]>;
  }

}

export class FraudDetectorResponsesFetchModelVersionExternalEventsDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetModelVersionRequest) {
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.externalEventsDetail.dataLocation', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          modelVersionNumber: this.__input.modelVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModelVersion.externalEventsDetail.dataAccessRoleArn', props);
    return resource.getResponseField('externalEventsDetail.dataAccessRoleArn') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetModelsRequest) {
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModels.nextToken', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetModels.models', props);
    return resource.getResponseField('models') as unknown as shapes.FraudDetectorModel[];
  }

}

export class FraudDetectorResponsesFetchOutcomes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetOutcomesRequest) {
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutcomes.outcomes', props);
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutcomes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetRulesRequest) {
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
          ruleId: this.__input.ruleId,
          detectorId: this.__input.detectorId,
          ruleVersion: this.__input.ruleVersion,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRules.ruleDetails', props);
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
          ruleId: this.__input.ruleId,
          detectorId: this.__input.detectorId,
          ruleVersion: this.__input.ruleVersion,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRules.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesFetchVariables {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorGetVariablesRequest) {
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVariables.variables', props);
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
          name: this.__input.name,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVariables.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorListTagsForResourceRequest) {
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
          resourceARN: this.__input.resourceARN,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
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
          resourceARN: this.__input.resourceARN,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class FraudDetectorResponsesUpdateModelVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorUpdateModelVersionRequest) {
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          majorVersionNumber: this.__input.majorVersionNumber,
          externalEventsDetail: {
            dataLocation: this.__input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.__input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModelVersion.modelId', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          majorVersionNumber: this.__input.majorVersionNumber,
          externalEventsDetail: {
            dataLocation: this.__input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.__input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModelVersion.modelType', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          majorVersionNumber: this.__input.majorVersionNumber,
          externalEventsDetail: {
            dataLocation: this.__input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.__input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModelVersion.modelVersionNumber', props);
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
          modelId: this.__input.modelId,
          modelType: this.__input.modelType,
          majorVersionNumber: this.__input.majorVersionNumber,
          externalEventsDetail: {
            dataLocation: this.__input.externalEventsDetail?.dataLocation,
            dataAccessRoleArn: this.__input.externalEventsDetail?.dataAccessRoleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateModelVersion.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class FraudDetectorResponsesUpdateRuleVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorUpdateRuleVersionRequest) {
  }

  public get rule(): FraudDetectorResponsesUpdateRuleVersionRule {
    return new FraudDetectorResponsesUpdateRuleVersionRule(this.__scope, this.__resources, this.__input);
  }

}

export class FraudDetectorResponsesUpdateRuleVersionRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FraudDetectorUpdateRuleVersionRequest) {
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
            detectorId: this.__input.rule.detectorId,
            ruleId: this.__input.rule.ruleId,
            ruleVersion: this.__input.rule.ruleVersion,
          },
          description: this.__input.description,
          expression: this.__input.expression,
          language: this.__input.language,
          outcomes: this.__input.outcomes,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleVersion.rule.detectorId', props);
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
            detectorId: this.__input.rule.detectorId,
            ruleId: this.__input.rule.ruleId,
            ruleVersion: this.__input.rule.ruleVersion,
          },
          description: this.__input.description,
          expression: this.__input.expression,
          language: this.__input.language,
          outcomes: this.__input.outcomes,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleVersion.rule.ruleId', props);
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
            detectorId: this.__input.rule.detectorId,
            ruleId: this.__input.rule.ruleId,
            ruleVersion: this.__input.rule.ruleVersion,
          },
          description: this.__input.description,
          expression: this.__input.expression,
          language: this.__input.language,
          outcomes: this.__input.outcomes,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleVersion.rule.ruleVersion', props);
    return resource.getResponseField('rule.ruleVersion') as unknown as string;
  }

}

