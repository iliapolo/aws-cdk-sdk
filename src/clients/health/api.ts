import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class HealthClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeAffectedAccountsForOrganization(input: shapes.HealthDescribeAffectedAccountsForOrganizationRequest): HealthDescribeAffectedAccountsForOrganization {
    return new HealthDescribeAffectedAccountsForOrganization(this, 'DescribeAffectedAccountsForOrganization', this.__resources, input);
  }

  public describeAffectedEntities(input: shapes.HealthDescribeAffectedEntitiesRequest): HealthDescribeAffectedEntities {
    return new HealthDescribeAffectedEntities(this, 'DescribeAffectedEntities', this.__resources, input);
  }

  public describeAffectedEntitiesForOrganization(input: shapes.HealthDescribeAffectedEntitiesForOrganizationRequest): HealthDescribeAffectedEntitiesForOrganization {
    return new HealthDescribeAffectedEntitiesForOrganization(this, 'DescribeAffectedEntitiesForOrganization', this.__resources, input);
  }

  public describeEntityAggregates(input: shapes.HealthDescribeEntityAggregatesRequest): HealthDescribeEntityAggregates {
    return new HealthDescribeEntityAggregates(this, 'DescribeEntityAggregates', this.__resources, input);
  }

  public describeEventAggregates(input: shapes.HealthDescribeEventAggregatesRequest): HealthDescribeEventAggregates {
    return new HealthDescribeEventAggregates(this, 'DescribeEventAggregates', this.__resources, input);
  }

  public describeEventDetails(input: shapes.HealthDescribeEventDetailsRequest): HealthDescribeEventDetails {
    return new HealthDescribeEventDetails(this, 'DescribeEventDetails', this.__resources, input);
  }

  public describeEventDetailsForOrganization(input: shapes.HealthDescribeEventDetailsForOrganizationRequest): HealthDescribeEventDetailsForOrganization {
    return new HealthDescribeEventDetailsForOrganization(this, 'DescribeEventDetailsForOrganization', this.__resources, input);
  }

  public describeEventTypes(input: shapes.HealthDescribeEventTypesRequest): HealthDescribeEventTypes {
    return new HealthDescribeEventTypes(this, 'DescribeEventTypes', this.__resources, input);
  }

  public describeEvents(input: shapes.HealthDescribeEventsRequest): HealthDescribeEvents {
    return new HealthDescribeEvents(this, 'DescribeEvents', this.__resources, input);
  }

  public describeEventsForOrganization(input: shapes.HealthDescribeEventsForOrganizationRequest): HealthDescribeEventsForOrganization {
    return new HealthDescribeEventsForOrganization(this, 'DescribeEventsForOrganization', this.__resources, input);
  }

  public describeHealthServiceStatusForOrganization(): HealthDescribeHealthServiceStatusForOrganization {
    return new HealthDescribeHealthServiceStatusForOrganization(this, 'DescribeHealthServiceStatusForOrganization', this.__resources);
  }

  public disableHealthServiceAccessForOrganization(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableHealthServiceAccessForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DisableHealthServiceAccessForOrganization'),
      },
    };
    new cr.AwsCustomResource(this, 'DisableHealthServiceAccessForOrganization', props);
  }

  public enableHealthServiceAccessForOrganization(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableHealthServiceAccessForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.EnableHealthServiceAccessForOrganization'),
      },
    };
    new cr.AwsCustomResource(this, 'EnableHealthServiceAccessForOrganization', props);
  }

}

export class HealthDescribeAffectedAccountsForOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeAffectedAccountsForOrganizationRequest) {
    super(scope, id);
  }

  public get affectedAccounts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAffectedAccountsForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeAffectedAccountsForOrganization.affectedAccounts'),
        outputPath: 'affectedAccounts',
        parameters: {
          eventArn: this.input.eventArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAffectedAccountsForOrganization.affectedAccounts', props);
    return resource.getResponseField('affectedAccounts') as unknown as string[];
  }

  public get eventScopeCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAffectedAccountsForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeAffectedAccountsForOrganization.eventScopeCode'),
        outputPath: 'eventScopeCode',
        parameters: {
          eventArn: this.input.eventArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAffectedAccountsForOrganization.eventScopeCode', props);
    return resource.getResponseField('eventScopeCode') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAffectedAccountsForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeAffectedAccountsForOrganization.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          eventArn: this.input.eventArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAffectedAccountsForOrganization.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthDescribeAffectedEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeAffectedEntitiesRequest) {
    super(scope, id);
  }

  public get entities(): shapes.HealthAffectedEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAffectedEntities',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeAffectedEntities.entities'),
        outputPath: 'entities',
        parameters: {
          filter: {
            eventArns: this.input.filter.eventArns,
            entityArns: this.input.filter.entityArns,
            entityValues: this.input.filter.entityValues,
            lastUpdatedTimes: this.input.filter.lastUpdatedTimes,
            tags: this.input.filter.tags,
            statusCodes: this.input.filter.statusCodes,
          },
          locale: this.input.locale,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAffectedEntities.entities', props);
    return resource.getResponseField('entities') as unknown as shapes.HealthAffectedEntity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAffectedEntities',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeAffectedEntities.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filter: {
            eventArns: this.input.filter.eventArns,
            entityArns: this.input.filter.entityArns,
            entityValues: this.input.filter.entityValues,
            lastUpdatedTimes: this.input.filter.lastUpdatedTimes,
            tags: this.input.filter.tags,
            statusCodes: this.input.filter.statusCodes,
          },
          locale: this.input.locale,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAffectedEntities.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthDescribeAffectedEntitiesForOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeAffectedEntitiesForOrganizationRequest) {
    super(scope, id);
  }

  public get entities(): shapes.HealthAffectedEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAffectedEntitiesForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeAffectedEntitiesForOrganization.entities'),
        outputPath: 'entities',
        parameters: {
          organizationEntityFilters: this.input.organizationEntityFilters,
          locale: this.input.locale,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAffectedEntitiesForOrganization.entities', props);
    return resource.getResponseField('entities') as unknown as shapes.HealthAffectedEntity[];
  }

  public get failedSet(): shapes.HealthOrganizationAffectedEntitiesErrorItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAffectedEntitiesForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeAffectedEntitiesForOrganization.failedSet'),
        outputPath: 'failedSet',
        parameters: {
          organizationEntityFilters: this.input.organizationEntityFilters,
          locale: this.input.locale,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAffectedEntitiesForOrganization.failedSet', props);
    return resource.getResponseField('failedSet') as unknown as shapes.HealthOrganizationAffectedEntitiesErrorItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAffectedEntitiesForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeAffectedEntitiesForOrganization.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          organizationEntityFilters: this.input.organizationEntityFilters,
          locale: this.input.locale,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAffectedEntitiesForOrganization.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthDescribeEntityAggregates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeEntityAggregatesRequest) {
    super(scope, id);
  }

  public get entityAggregates(): shapes.HealthEntityAggregate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityAggregates',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEntityAggregates.entityAggregates'),
        outputPath: 'entityAggregates',
        parameters: {
          eventArns: this.input.eventArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityAggregates.entityAggregates', props);
    return resource.getResponseField('entityAggregates') as unknown as shapes.HealthEntityAggregate[];
  }

}

export class HealthDescribeEventAggregates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeEventAggregatesRequest) {
    super(scope, id);
  }

  public get eventAggregates(): shapes.HealthEventAggregate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventAggregates',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventAggregates.eventAggregates'),
        outputPath: 'eventAggregates',
        parameters: {
          filter: {
            eventArns: this.input.filter?.eventArns,
            eventTypeCodes: this.input.filter?.eventTypeCodes,
            services: this.input.filter?.services,
            regions: this.input.filter?.regions,
            availabilityZones: this.input.filter?.availabilityZones,
            startTimes: this.input.filter?.startTimes,
            endTimes: this.input.filter?.endTimes,
            lastUpdatedTimes: this.input.filter?.lastUpdatedTimes,
            entityArns: this.input.filter?.entityArns,
            entityValues: this.input.filter?.entityValues,
            eventTypeCategories: this.input.filter?.eventTypeCategories,
            tags: this.input.filter?.tags,
            eventStatusCodes: this.input.filter?.eventStatusCodes,
          },
          aggregateField: this.input.aggregateField,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventAggregates.eventAggregates', props);
    return resource.getResponseField('eventAggregates') as unknown as shapes.HealthEventAggregate[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventAggregates',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventAggregates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filter: {
            eventArns: this.input.filter?.eventArns,
            eventTypeCodes: this.input.filter?.eventTypeCodes,
            services: this.input.filter?.services,
            regions: this.input.filter?.regions,
            availabilityZones: this.input.filter?.availabilityZones,
            startTimes: this.input.filter?.startTimes,
            endTimes: this.input.filter?.endTimes,
            lastUpdatedTimes: this.input.filter?.lastUpdatedTimes,
            entityArns: this.input.filter?.entityArns,
            entityValues: this.input.filter?.entityValues,
            eventTypeCategories: this.input.filter?.eventTypeCategories,
            tags: this.input.filter?.tags,
            eventStatusCodes: this.input.filter?.eventStatusCodes,
          },
          aggregateField: this.input.aggregateField,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventAggregates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthDescribeEventDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeEventDetailsRequest) {
    super(scope, id);
  }

  public get successfulSet(): shapes.HealthEventDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventDetails',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventDetails.successfulSet'),
        outputPath: 'successfulSet',
        parameters: {
          eventArns: this.input.eventArns,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventDetails.successfulSet', props);
    return resource.getResponseField('successfulSet') as unknown as shapes.HealthEventDetails[];
  }

  public get failedSet(): shapes.HealthEventDetailsErrorItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventDetails',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventDetails.failedSet'),
        outputPath: 'failedSet',
        parameters: {
          eventArns: this.input.eventArns,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventDetails.failedSet', props);
    return resource.getResponseField('failedSet') as unknown as shapes.HealthEventDetailsErrorItem[];
  }

}

export class HealthDescribeEventDetailsForOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeEventDetailsForOrganizationRequest) {
    super(scope, id);
  }

  public get successfulSet(): shapes.HealthOrganizationEventDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventDetailsForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventDetailsForOrganization.successfulSet'),
        outputPath: 'successfulSet',
        parameters: {
          organizationEventDetailFilters: this.input.organizationEventDetailFilters,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventDetailsForOrganization.successfulSet', props);
    return resource.getResponseField('successfulSet') as unknown as shapes.HealthOrganizationEventDetails[];
  }

  public get failedSet(): shapes.HealthOrganizationEventDetailsErrorItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventDetailsForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventDetailsForOrganization.failedSet'),
        outputPath: 'failedSet',
        parameters: {
          organizationEventDetailFilters: this.input.organizationEventDetailFilters,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventDetailsForOrganization.failedSet', props);
    return resource.getResponseField('failedSet') as unknown as shapes.HealthOrganizationEventDetailsErrorItem[];
  }

}

export class HealthDescribeEventTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeEventTypesRequest) {
    super(scope, id);
  }

  public get eventTypes(): shapes.HealthEventType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTypes',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventTypes.eventTypes'),
        outputPath: 'eventTypes',
        parameters: {
          filter: {
            eventTypeCodes: this.input.filter?.eventTypeCodes,
            services: this.input.filter?.services,
            eventTypeCategories: this.input.filter?.eventTypeCategories,
          },
          locale: this.input.locale,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTypes.eventTypes', props);
    return resource.getResponseField('eventTypes') as unknown as shapes.HealthEventType[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTypes',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventTypes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filter: {
            eventTypeCodes: this.input.filter?.eventTypeCodes,
            services: this.input.filter?.services,
            eventTypeCategories: this.input.filter?.eventTypeCategories,
          },
          locale: this.input.locale,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthDescribeEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeEventsRequest) {
    super(scope, id);
  }

  public get events(): shapes.HealthEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEvents.events'),
        outputPath: 'events',
        parameters: {
          filter: {
            eventArns: this.input.filter?.eventArns,
            eventTypeCodes: this.input.filter?.eventTypeCodes,
            services: this.input.filter?.services,
            regions: this.input.filter?.regions,
            availabilityZones: this.input.filter?.availabilityZones,
            startTimes: this.input.filter?.startTimes,
            endTimes: this.input.filter?.endTimes,
            lastUpdatedTimes: this.input.filter?.lastUpdatedTimes,
            entityArns: this.input.filter?.entityArns,
            entityValues: this.input.filter?.entityValues,
            eventTypeCategories: this.input.filter?.eventTypeCategories,
            tags: this.input.filter?.tags,
            eventStatusCodes: this.input.filter?.eventStatusCodes,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.events', props);
    return resource.getResponseField('events') as unknown as shapes.HealthEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEvents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filter: {
            eventArns: this.input.filter?.eventArns,
            eventTypeCodes: this.input.filter?.eventTypeCodes,
            services: this.input.filter?.services,
            regions: this.input.filter?.regions,
            availabilityZones: this.input.filter?.availabilityZones,
            startTimes: this.input.filter?.startTimes,
            endTimes: this.input.filter?.endTimes,
            lastUpdatedTimes: this.input.filter?.lastUpdatedTimes,
            entityArns: this.input.filter?.entityArns,
            entityValues: this.input.filter?.entityValues,
            eventTypeCategories: this.input.filter?.eventTypeCategories,
            tags: this.input.filter?.tags,
            eventStatusCodes: this.input.filter?.eventStatusCodes,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthDescribeEventsForOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HealthDescribeEventsForOrganizationRequest) {
    super(scope, id);
  }

  public get events(): shapes.HealthOrganizationEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventsForOrganization.events'),
        outputPath: 'events',
        parameters: {
          filter: {
            eventTypeCodes: this.input.filter?.eventTypeCodes,
            awsAccountIds: this.input.filter?.awsAccountIds,
            services: this.input.filter?.services,
            regions: this.input.filter?.regions,
            startTime: {
              from: this.input.filter?.startTime?.from,
              to: this.input.filter?.startTime?.to,
            },
            endTime: {
              from: this.input.filter?.endTime?.from,
              to: this.input.filter?.endTime?.to,
            },
            lastUpdatedTime: {
              from: this.input.filter?.lastUpdatedTime?.from,
              to: this.input.filter?.lastUpdatedTime?.to,
            },
            entityArns: this.input.filter?.entityArns,
            entityValues: this.input.filter?.entityValues,
            eventTypeCategories: this.input.filter?.eventTypeCategories,
            eventStatusCodes: this.input.filter?.eventStatusCodes,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsForOrganization.events', props);
    return resource.getResponseField('events') as unknown as shapes.HealthOrganizationEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeEventsForOrganization.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filter: {
            eventTypeCodes: this.input.filter?.eventTypeCodes,
            awsAccountIds: this.input.filter?.awsAccountIds,
            services: this.input.filter?.services,
            regions: this.input.filter?.regions,
            startTime: {
              from: this.input.filter?.startTime?.from,
              to: this.input.filter?.startTime?.to,
            },
            endTime: {
              from: this.input.filter?.endTime?.from,
              to: this.input.filter?.endTime?.to,
            },
            lastUpdatedTime: {
              from: this.input.filter?.lastUpdatedTime?.from,
              to: this.input.filter?.lastUpdatedTime?.to,
            },
            entityArns: this.input.filter?.entityArns,
            entityValues: this.input.filter?.entityValues,
            eventTypeCategories: this.input.filter?.eventTypeCategories,
            eventStatusCodes: this.input.filter?.eventStatusCodes,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsForOrganization.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthDescribeHealthServiceStatusForOrganization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get healthServiceAccessStatusForOrganization(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHealthServiceStatusForOrganization',
        service: 'Health',
        physicalResourceId: cr.PhysicalResourceId.of('Health.DescribeHealthServiceStatusForOrganization.healthServiceAccessStatusForOrganization'),
        outputPath: 'healthServiceAccessStatusForOrganization',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHealthServiceStatusForOrganization.healthServiceAccessStatusForOrganization', props);
    return resource.getResponseField('healthServiceAccessStatusForOrganization') as unknown as string;
  }

}

