import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTEventsDataClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchAcknowledgeAlarm(input: shapes.IoTEventsDataBatchAcknowledgeAlarmRequest): IoTEventsDataResponsesBatchAcknowledgeAlarm {
    return new IoTEventsDataResponsesBatchAcknowledgeAlarm(this, this.__resources, input);
  }

  public batchDisableAlarm(input: shapes.IoTEventsDataBatchDisableAlarmRequest): IoTEventsDataResponsesBatchDisableAlarm {
    return new IoTEventsDataResponsesBatchDisableAlarm(this, this.__resources, input);
  }

  public batchEnableAlarm(input: shapes.IoTEventsDataBatchEnableAlarmRequest): IoTEventsDataResponsesBatchEnableAlarm {
    return new IoTEventsDataResponsesBatchEnableAlarm(this, this.__resources, input);
  }

  public batchPutMessage(input: shapes.IoTEventsDataBatchPutMessageRequest): IoTEventsDataResponsesBatchPutMessage {
    return new IoTEventsDataResponsesBatchPutMessage(this, this.__resources, input);
  }

  public batchResetAlarm(input: shapes.IoTEventsDataBatchResetAlarmRequest): IoTEventsDataResponsesBatchResetAlarm {
    return new IoTEventsDataResponsesBatchResetAlarm(this, this.__resources, input);
  }

  public batchSnoozeAlarm(input: shapes.IoTEventsDataBatchSnoozeAlarmRequest): IoTEventsDataResponsesBatchSnoozeAlarm {
    return new IoTEventsDataResponsesBatchSnoozeAlarm(this, this.__resources, input);
  }

  public batchUpdateDetector(input: shapes.IoTEventsDataBatchUpdateDetectorRequest): IoTEventsDataResponsesBatchUpdateDetector {
    return new IoTEventsDataResponsesBatchUpdateDetector(this, this.__resources, input);
  }

  public describeAlarm(input: shapes.IoTEventsDataDescribeAlarmRequest): IoTEventsDataResponsesDescribeAlarm {
    return new IoTEventsDataResponsesDescribeAlarm(this, this.__resources, input);
  }

  public describeDetector(input: shapes.IoTEventsDataDescribeDetectorRequest): IoTEventsDataResponsesDescribeDetector {
    return new IoTEventsDataResponsesDescribeDetector(this, this.__resources, input);
  }

  public listAlarms(input: shapes.IoTEventsDataListAlarmsRequest): IoTEventsDataResponsesListAlarms {
    return new IoTEventsDataResponsesListAlarms(this, this.__resources, input);
  }

  public listDetectors(input: shapes.IoTEventsDataListDetectorsRequest): IoTEventsDataResponsesListDetectors {
    return new IoTEventsDataResponsesListDetectors(this, this.__resources, input);
  }

}

export class IoTEventsDataResponsesBatchAcknowledgeAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataBatchAcknowledgeAlarmRequest) {
  }

  public get errorEntries(): shapes.IoTEventsDataBatchAlarmActionErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAcknowledgeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.BatchAcknowledgeAlarm.errorEntries'),
        outputPath: 'errorEntries',
        parameters: {
          acknowledgeActionRequests: this.__input.acknowledgeActionRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAcknowledgeAlarm.errorEntries', props);
    return resource.getResponseField('errorEntries') as unknown as shapes.IoTEventsDataBatchAlarmActionErrorEntry[];
  }

}

export class IoTEventsDataResponsesBatchDisableAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataBatchDisableAlarmRequest) {
  }

  public get errorEntries(): shapes.IoTEventsDataBatchAlarmActionErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisableAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.BatchDisableAlarm.errorEntries'),
        outputPath: 'errorEntries',
        parameters: {
          disableActionRequests: this.__input.disableActionRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisableAlarm.errorEntries', props);
    return resource.getResponseField('errorEntries') as unknown as shapes.IoTEventsDataBatchAlarmActionErrorEntry[];
  }

}

export class IoTEventsDataResponsesBatchEnableAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataBatchEnableAlarmRequest) {
  }

  public get errorEntries(): shapes.IoTEventsDataBatchAlarmActionErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchEnableAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.BatchEnableAlarm.errorEntries'),
        outputPath: 'errorEntries',
        parameters: {
          enableActionRequests: this.__input.enableActionRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchEnableAlarm.errorEntries', props);
    return resource.getResponseField('errorEntries') as unknown as shapes.IoTEventsDataBatchAlarmActionErrorEntry[];
  }

}

export class IoTEventsDataResponsesBatchPutMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataBatchPutMessageRequest) {
  }

  public get batchPutMessageErrorEntries(): shapes.IoTEventsDataBatchPutMessageErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchPutMessage',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.BatchPutMessage.BatchPutMessageErrorEntries'),
        outputPath: 'BatchPutMessageErrorEntries',
        parameters: {
          messages: this.__input.messages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchPutMessage.BatchPutMessageErrorEntries', props);
    return resource.getResponseField('BatchPutMessageErrorEntries') as unknown as shapes.IoTEventsDataBatchPutMessageErrorEntry[];
  }

}

export class IoTEventsDataResponsesBatchResetAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataBatchResetAlarmRequest) {
  }

  public get errorEntries(): shapes.IoTEventsDataBatchAlarmActionErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchResetAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.BatchResetAlarm.errorEntries'),
        outputPath: 'errorEntries',
        parameters: {
          resetActionRequests: this.__input.resetActionRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchResetAlarm.errorEntries', props);
    return resource.getResponseField('errorEntries') as unknown as shapes.IoTEventsDataBatchAlarmActionErrorEntry[];
  }

}

export class IoTEventsDataResponsesBatchSnoozeAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataBatchSnoozeAlarmRequest) {
  }

  public get errorEntries(): shapes.IoTEventsDataBatchAlarmActionErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchSnoozeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.BatchSnoozeAlarm.errorEntries'),
        outputPath: 'errorEntries',
        parameters: {
          snoozeActionRequests: this.__input.snoozeActionRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchSnoozeAlarm.errorEntries', props);
    return resource.getResponseField('errorEntries') as unknown as shapes.IoTEventsDataBatchAlarmActionErrorEntry[];
  }

}

export class IoTEventsDataResponsesBatchUpdateDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataBatchUpdateDetectorRequest) {
  }

  public get batchUpdateDetectorErrorEntries(): shapes.IoTEventsDataBatchUpdateDetectorErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdateDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.BatchUpdateDetector.batchUpdateDetectorErrorEntries'),
        outputPath: 'batchUpdateDetectorErrorEntries',
        parameters: {
          detectors: this.__input.detectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdateDetector.batchUpdateDetectorErrorEntries', props);
    return resource.getResponseField('batchUpdateDetectorErrorEntries') as unknown as shapes.IoTEventsDataBatchUpdateDetectorErrorEntry[];
  }

}

export class IoTEventsDataResponsesDescribeAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get alarm(): IoTEventsDataResponsesDescribeAlarmAlarm {
    return new IoTEventsDataResponsesDescribeAlarmAlarm(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get alarmModelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmModelName'),
        outputPath: 'alarm.alarmModelName',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmModelName', props);
    return resource.getResponseField('alarm.alarmModelName') as unknown as string;
  }

  public get alarmModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmModelVersion'),
        outputPath: 'alarm.alarmModelVersion',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmModelVersion', props);
    return resource.getResponseField('alarm.alarmModelVersion') as unknown as string;
  }

  public get keyValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.keyValue'),
        outputPath: 'alarm.keyValue',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.keyValue', props);
    return resource.getResponseField('alarm.keyValue') as unknown as string;
  }

  public get alarmState(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmState {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmState(this.__scope, this.__resources, this.__input);
  }

  public get severity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.severity'),
        outputPath: 'alarm.severity',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.severity', props);
    return resource.getResponseField('alarm.severity') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.creationTime'),
        outputPath: 'alarm.creationTime',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.creationTime', props);
    return resource.getResponseField('alarm.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.lastUpdateTime'),
        outputPath: 'alarm.lastUpdateTime',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.lastUpdateTime', props);
    return resource.getResponseField('alarm.lastUpdateTime') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get stateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.stateName'),
        outputPath: 'alarm.alarmState.stateName',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.stateName', props);
    return resource.getResponseField('alarm.alarmState.stateName') as unknown as string;
  }

  public get ruleEvaluation(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateRuleEvaluation {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateRuleEvaluation(this.__scope, this.__resources, this.__input);
  }

  public get customerAction(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerAction {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerAction(this.__scope, this.__resources, this.__input);
  }

  public get systemEvent(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateSystemEvent {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateSystemEvent(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateRuleEvaluation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get simpleRuleEvaluation(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateRuleEvaluationSimpleRuleEvaluation {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateRuleEvaluationSimpleRuleEvaluation(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateRuleEvaluationSimpleRuleEvaluation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get inputPropertyValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.inputPropertyValue'),
        outputPath: 'alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.inputPropertyValue',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.inputPropertyValue', props);
    return resource.getResponseField('alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.inputPropertyValue') as unknown as string;
  }

  public get operator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.operator'),
        outputPath: 'alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.operator',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.operator', props);
    return resource.getResponseField('alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.operator') as unknown as string;
  }

  public get thresholdValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.thresholdValue'),
        outputPath: 'alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.thresholdValue',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.thresholdValue', props);
    return resource.getResponseField('alarm.alarmState.ruleEvaluation.simpleRuleEvaluation.thresholdValue') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get actionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.customerAction.actionName'),
        outputPath: 'alarm.alarmState.customerAction.actionName',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.customerAction.actionName', props);
    return resource.getResponseField('alarm.alarmState.customerAction.actionName') as unknown as string;
  }

  public get snoozeActionConfiguration(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionSnoozeActionConfiguration {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionSnoozeActionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get enableActionConfiguration(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionEnableActionConfiguration {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionEnableActionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get disableActionConfiguration(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionDisableActionConfiguration {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionDisableActionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get acknowledgeActionConfiguration(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionAcknowledgeActionConfiguration {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionAcknowledgeActionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get resetActionConfiguration(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionResetActionConfiguration {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionResetActionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionSnoozeActionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get snoozeDuration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.customerAction.snoozeActionConfiguration.snoozeDuration'),
        outputPath: 'alarm.alarmState.customerAction.snoozeActionConfiguration.snoozeDuration',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.customerAction.snoozeActionConfiguration.snoozeDuration', props);
    return resource.getResponseField('alarm.alarmState.customerAction.snoozeActionConfiguration.snoozeDuration') as unknown as number;
  }

  public get note(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.customerAction.snoozeActionConfiguration.note'),
        outputPath: 'alarm.alarmState.customerAction.snoozeActionConfiguration.note',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.customerAction.snoozeActionConfiguration.note', props);
    return resource.getResponseField('alarm.alarmState.customerAction.snoozeActionConfiguration.note') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionEnableActionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get note(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.customerAction.enableActionConfiguration.note'),
        outputPath: 'alarm.alarmState.customerAction.enableActionConfiguration.note',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.customerAction.enableActionConfiguration.note', props);
    return resource.getResponseField('alarm.alarmState.customerAction.enableActionConfiguration.note') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionDisableActionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get note(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.customerAction.disableActionConfiguration.note'),
        outputPath: 'alarm.alarmState.customerAction.disableActionConfiguration.note',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.customerAction.disableActionConfiguration.note', props);
    return resource.getResponseField('alarm.alarmState.customerAction.disableActionConfiguration.note') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionAcknowledgeActionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get note(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.customerAction.acknowledgeActionConfiguration.note'),
        outputPath: 'alarm.alarmState.customerAction.acknowledgeActionConfiguration.note',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.customerAction.acknowledgeActionConfiguration.note', props);
    return resource.getResponseField('alarm.alarmState.customerAction.acknowledgeActionConfiguration.note') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateCustomerActionResetActionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get note(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.customerAction.resetActionConfiguration.note'),
        outputPath: 'alarm.alarmState.customerAction.resetActionConfiguration.note',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.customerAction.resetActionConfiguration.note', props);
    return resource.getResponseField('alarm.alarmState.customerAction.resetActionConfiguration.note') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateSystemEvent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get eventType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.systemEvent.eventType'),
        outputPath: 'alarm.alarmState.systemEvent.eventType',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.systemEvent.eventType', props);
    return resource.getResponseField('alarm.alarmState.systemEvent.eventType') as unknown as string;
  }

  public get stateChangeConfiguration(): IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateSystemEventStateChangeConfiguration {
    return new IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateSystemEventStateChangeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsDataResponsesDescribeAlarmAlarmAlarmStateSystemEventStateChangeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeAlarmRequest) {
  }

  public get triggerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarm',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeAlarm.alarm.alarmState.systemEvent.stateChangeConfiguration.triggerType'),
        outputPath: 'alarm.alarmState.systemEvent.stateChangeConfiguration.triggerType',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarm.alarm.alarmState.systemEvent.stateChangeConfiguration.triggerType', props);
    return resource.getResponseField('alarm.alarmState.systemEvent.stateChangeConfiguration.triggerType') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeDetectorRequest) {
  }

  public get detector(): IoTEventsDataResponsesDescribeDetectorDetector {
    return new IoTEventsDataResponsesDescribeDetectorDetector(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsDataResponsesDescribeDetectorDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeDetectorRequest) {
  }

  public get detectorModelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.detectorModelName'),
        outputPath: 'detector.detectorModelName',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.detectorModelName', props);
    return resource.getResponseField('detector.detectorModelName') as unknown as string;
  }

  public get keyValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.keyValue'),
        outputPath: 'detector.keyValue',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.keyValue', props);
    return resource.getResponseField('detector.keyValue') as unknown as string;
  }

  public get detectorModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.detectorModelVersion'),
        outputPath: 'detector.detectorModelVersion',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.detectorModelVersion', props);
    return resource.getResponseField('detector.detectorModelVersion') as unknown as string;
  }

  public get state(): IoTEventsDataResponsesDescribeDetectorDetectorState {
    return new IoTEventsDataResponsesDescribeDetectorDetectorState(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.creationTime'),
        outputPath: 'detector.creationTime',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.creationTime', props);
    return resource.getResponseField('detector.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.lastUpdateTime'),
        outputPath: 'detector.lastUpdateTime',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.lastUpdateTime', props);
    return resource.getResponseField('detector.lastUpdateTime') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeDetectorDetectorState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeDetectorRequest) {
  }

  public get stateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.state.stateName'),
        outputPath: 'detector.state.stateName',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.state.stateName', props);
    return resource.getResponseField('detector.state.stateName') as unknown as string;
  }

  public get variables(): shapes.IoTEventsDataVariable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.state.variables'),
        outputPath: 'detector.state.variables',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.state.variables', props);
    return resource.getResponseField('detector.state.variables') as unknown as shapes.IoTEventsDataVariable[];
  }

  public get timers(): shapes.IoTEventsDataTimer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.state.timers'),
        outputPath: 'detector.state.timers',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.state.timers', props);
    return resource.getResponseField('detector.state.timers') as unknown as shapes.IoTEventsDataTimer[];
  }

}

export class IoTEventsDataResponsesListAlarms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataListAlarmsRequest) {
  }

  public get alarmSummaries(): shapes.IoTEventsDataAlarmSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlarms',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.ListAlarms.alarmSummaries'),
        outputPath: 'alarmSummaries',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlarms.alarmSummaries', props);
    return resource.getResponseField('alarmSummaries') as unknown as shapes.IoTEventsDataAlarmSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlarms',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.ListAlarms.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlarms.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTEventsDataResponsesListDetectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataListDetectorsRequest) {
  }

  public get detectorSummaries(): shapes.IoTEventsDataDetectorSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectors',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.ListDetectors.detectorSummaries'),
        outputPath: 'detectorSummaries',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          stateName: this.__input.stateName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectors.detectorSummaries', props);
    return resource.getResponseField('detectorSummaries') as unknown as shapes.IoTEventsDataDetectorSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectors',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.ListDetectors.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          stateName: this.__input.stateName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectors.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

