import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class HealthClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeAffectedAccountsForOrganization(input: shapes.HealthDescribeAffectedAccountsForOrganizationRequest): HealthResponsesDescribeAffectedAccountsForOrganization {
    return new HealthResponsesDescribeAffectedAccountsForOrganization(this, this.__resources, input);
  }

  public describeAffectedEntities(input: shapes.HealthDescribeAffectedEntitiesRequest): HealthResponsesDescribeAffectedEntities {
    return new HealthResponsesDescribeAffectedEntities(this, this.__resources, input);
  }

  public describeAffectedEntitiesForOrganization(input: shapes.HealthDescribeAffectedEntitiesForOrganizationRequest): HealthResponsesDescribeAffectedEntitiesForOrganization {
    return new HealthResponsesDescribeAffectedEntitiesForOrganization(this, this.__resources, input);
  }

  public describeEntityAggregates(input: shapes.HealthDescribeEntityAggregatesRequest): HealthResponsesDescribeEntityAggregates {
    return new HealthResponsesDescribeEntityAggregates(this, this.__resources, input);
  }

  public describeEventAggregates(input: shapes.HealthDescribeEventAggregatesRequest): HealthResponsesDescribeEventAggregates {
    return new HealthResponsesDescribeEventAggregates(this, this.__resources, input);
  }

  public describeEventDetails(input: shapes.HealthDescribeEventDetailsRequest): HealthResponsesDescribeEventDetails {
    return new HealthResponsesDescribeEventDetails(this, this.__resources, input);
  }

  public describeEventDetailsForOrganization(input: shapes.HealthDescribeEventDetailsForOrganizationRequest): HealthResponsesDescribeEventDetailsForOrganization {
    return new HealthResponsesDescribeEventDetailsForOrganization(this, this.__resources, input);
  }

  public describeEventTypes(input: shapes.HealthDescribeEventTypesRequest): HealthResponsesDescribeEventTypes {
    return new HealthResponsesDescribeEventTypes(this, this.__resources, input);
  }

  public describeEvents(input: shapes.HealthDescribeEventsRequest): HealthResponsesDescribeEvents {
    return new HealthResponsesDescribeEvents(this, this.__resources, input);
  }

  public describeEventsForOrganization(input: shapes.HealthDescribeEventsForOrganizationRequest): HealthResponsesDescribeEventsForOrganization {
    return new HealthResponsesDescribeEventsForOrganization(this, this.__resources, input);
  }

  public describeHealthServiceStatusForOrganization(): HealthResponsesDescribeHealthServiceStatusForOrganization {
    return new HealthResponsesDescribeHealthServiceStatusForOrganization(this, this.__resources);
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

export class HealthResponsesDescribeAffectedAccountsForOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeAffectedAccountsForOrganizationRequest) {
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
          eventArn: this.__input.eventArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAffectedAccountsForOrganization.affectedAccounts', props);
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
          eventArn: this.__input.eventArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAffectedAccountsForOrganization.eventScopeCode', props);
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
          eventArn: this.__input.eventArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAffectedAccountsForOrganization.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthResponsesDescribeAffectedEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeAffectedEntitiesRequest) {
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
            eventArns: this.__input.filter.eventArns,
            entityArns: this.__input.filter.entityArns,
            entityValues: this.__input.filter.entityValues,
            lastUpdatedTimes: this.__input.filter.lastUpdatedTimes,
            tags: this.__input.filter.tags,
            statusCodes: this.__input.filter.statusCodes,
          },
          locale: this.__input.locale,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAffectedEntities.entities', props);
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
            eventArns: this.__input.filter.eventArns,
            entityArns: this.__input.filter.entityArns,
            entityValues: this.__input.filter.entityValues,
            lastUpdatedTimes: this.__input.filter.lastUpdatedTimes,
            tags: this.__input.filter.tags,
            statusCodes: this.__input.filter.statusCodes,
          },
          locale: this.__input.locale,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAffectedEntities.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthResponsesDescribeAffectedEntitiesForOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeAffectedEntitiesForOrganizationRequest) {
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
          organizationEntityFilters: this.__input.organizationEntityFilters,
          locale: this.__input.locale,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAffectedEntitiesForOrganization.entities', props);
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
          organizationEntityFilters: this.__input.organizationEntityFilters,
          locale: this.__input.locale,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAffectedEntitiesForOrganization.failedSet', props);
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
          organizationEntityFilters: this.__input.organizationEntityFilters,
          locale: this.__input.locale,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAffectedEntitiesForOrganization.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthResponsesDescribeEntityAggregates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeEntityAggregatesRequest) {
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
          eventArns: this.__input.eventArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityAggregates.entityAggregates', props);
    return resource.getResponseField('entityAggregates') as unknown as shapes.HealthEntityAggregate[];
  }

}

export class HealthResponsesDescribeEventAggregates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeEventAggregatesRequest) {
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
            eventArns: this.__input.filter?.eventArns,
            eventTypeCodes: this.__input.filter?.eventTypeCodes,
            services: this.__input.filter?.services,
            regions: this.__input.filter?.regions,
            availabilityZones: this.__input.filter?.availabilityZones,
            startTimes: this.__input.filter?.startTimes,
            endTimes: this.__input.filter?.endTimes,
            lastUpdatedTimes: this.__input.filter?.lastUpdatedTimes,
            entityArns: this.__input.filter?.entityArns,
            entityValues: this.__input.filter?.entityValues,
            eventTypeCategories: this.__input.filter?.eventTypeCategories,
            tags: this.__input.filter?.tags,
            eventStatusCodes: this.__input.filter?.eventStatusCodes,
          },
          aggregateField: this.__input.aggregateField,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventAggregates.eventAggregates', props);
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
            eventArns: this.__input.filter?.eventArns,
            eventTypeCodes: this.__input.filter?.eventTypeCodes,
            services: this.__input.filter?.services,
            regions: this.__input.filter?.regions,
            availabilityZones: this.__input.filter?.availabilityZones,
            startTimes: this.__input.filter?.startTimes,
            endTimes: this.__input.filter?.endTimes,
            lastUpdatedTimes: this.__input.filter?.lastUpdatedTimes,
            entityArns: this.__input.filter?.entityArns,
            entityValues: this.__input.filter?.entityValues,
            eventTypeCategories: this.__input.filter?.eventTypeCategories,
            tags: this.__input.filter?.tags,
            eventStatusCodes: this.__input.filter?.eventStatusCodes,
          },
          aggregateField: this.__input.aggregateField,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventAggregates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthResponsesDescribeEventDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeEventDetailsRequest) {
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
          eventArns: this.__input.eventArns,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventDetails.successfulSet', props);
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
          eventArns: this.__input.eventArns,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventDetails.failedSet', props);
    return resource.getResponseField('failedSet') as unknown as shapes.HealthEventDetailsErrorItem[];
  }

}

export class HealthResponsesDescribeEventDetailsForOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeEventDetailsForOrganizationRequest) {
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
          organizationEventDetailFilters: this.__input.organizationEventDetailFilters,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventDetailsForOrganization.successfulSet', props);
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
          organizationEventDetailFilters: this.__input.organizationEventDetailFilters,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventDetailsForOrganization.failedSet', props);
    return resource.getResponseField('failedSet') as unknown as shapes.HealthOrganizationEventDetailsErrorItem[];
  }

}

export class HealthResponsesDescribeEventTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeEventTypesRequest) {
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
            eventTypeCodes: this.__input.filter?.eventTypeCodes,
            services: this.__input.filter?.services,
            eventTypeCategories: this.__input.filter?.eventTypeCategories,
          },
          locale: this.__input.locale,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTypes.eventTypes', props);
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
            eventTypeCodes: this.__input.filter?.eventTypeCodes,
            services: this.__input.filter?.services,
            eventTypeCategories: this.__input.filter?.eventTypeCategories,
          },
          locale: this.__input.locale,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthResponsesDescribeEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeEventsRequest) {
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
            eventArns: this.__input.filter?.eventArns,
            eventTypeCodes: this.__input.filter?.eventTypeCodes,
            services: this.__input.filter?.services,
            regions: this.__input.filter?.regions,
            availabilityZones: this.__input.filter?.availabilityZones,
            startTimes: this.__input.filter?.startTimes,
            endTimes: this.__input.filter?.endTimes,
            lastUpdatedTimes: this.__input.filter?.lastUpdatedTimes,
            entityArns: this.__input.filter?.entityArns,
            entityValues: this.__input.filter?.entityValues,
            eventTypeCategories: this.__input.filter?.eventTypeCategories,
            tags: this.__input.filter?.tags,
            eventStatusCodes: this.__input.filter?.eventStatusCodes,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.events', props);
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
            eventArns: this.__input.filter?.eventArns,
            eventTypeCodes: this.__input.filter?.eventTypeCodes,
            services: this.__input.filter?.services,
            regions: this.__input.filter?.regions,
            availabilityZones: this.__input.filter?.availabilityZones,
            startTimes: this.__input.filter?.startTimes,
            endTimes: this.__input.filter?.endTimes,
            lastUpdatedTimes: this.__input.filter?.lastUpdatedTimes,
            entityArns: this.__input.filter?.entityArns,
            entityValues: this.__input.filter?.entityValues,
            eventTypeCategories: this.__input.filter?.eventTypeCategories,
            tags: this.__input.filter?.tags,
            eventStatusCodes: this.__input.filter?.eventStatusCodes,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthResponsesDescribeEventsForOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthDescribeEventsForOrganizationRequest) {
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
            eventTypeCodes: this.__input.filter?.eventTypeCodes,
            awsAccountIds: this.__input.filter?.awsAccountIds,
            services: this.__input.filter?.services,
            regions: this.__input.filter?.regions,
            startTime: {
              from: this.__input.filter?.startTime?.from,
              to: this.__input.filter?.startTime?.to,
            },
            endTime: {
              from: this.__input.filter?.endTime?.from,
              to: this.__input.filter?.endTime?.to,
            },
            lastUpdatedTime: {
              from: this.__input.filter?.lastUpdatedTime?.from,
              to: this.__input.filter?.lastUpdatedTime?.to,
            },
            entityArns: this.__input.filter?.entityArns,
            entityValues: this.__input.filter?.entityValues,
            eventTypeCategories: this.__input.filter?.eventTypeCategories,
            eventStatusCodes: this.__input.filter?.eventStatusCodes,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsForOrganization.events', props);
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
            eventTypeCodes: this.__input.filter?.eventTypeCodes,
            awsAccountIds: this.__input.filter?.awsAccountIds,
            services: this.__input.filter?.services,
            regions: this.__input.filter?.regions,
            startTime: {
              from: this.__input.filter?.startTime?.from,
              to: this.__input.filter?.startTime?.to,
            },
            endTime: {
              from: this.__input.filter?.endTime?.from,
              to: this.__input.filter?.endTime?.to,
            },
            lastUpdatedTime: {
              from: this.__input.filter?.lastUpdatedTime?.from,
              to: this.__input.filter?.lastUpdatedTime?.to,
            },
            entityArns: this.__input.filter?.entityArns,
            entityValues: this.__input.filter?.entityValues,
            eventTypeCategories: this.__input.filter?.eventTypeCategories,
            eventStatusCodes: this.__input.filter?.eventStatusCodes,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsForOrganization.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HealthResponsesDescribeHealthServiceStatusForOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHealthServiceStatusForOrganization.healthServiceAccessStatusForOrganization', props);
    return resource.getResponseField('healthServiceAccessStatusForOrganization') as unknown as string;
  }

}

