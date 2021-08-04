import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SavingsPlansClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createSavingsPlan(input: shapes.SavingsPlansCreateSavingsPlanRequest): SavingsPlansResponsesCreateSavingsPlan {
    return new SavingsPlansResponsesCreateSavingsPlan(this, this.__resources, input);
  }

  public deleteQueuedSavingsPlan(input: shapes.SavingsPlansDeleteQueuedSavingsPlanRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteQueuedSavingsPlan',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DeleteQueuedSavingsPlan'),
        parameters: {
          savingsPlanId: input.savingsPlanId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteQueuedSavingsPlan', props);
  }

  public describeSavingsPlanRates(input: shapes.SavingsPlansDescribeSavingsPlanRatesRequest): SavingsPlansResponsesDescribeSavingsPlanRates {
    return new SavingsPlansResponsesDescribeSavingsPlanRates(this, this.__resources, input);
  }

  public describeSavingsPlans(input: shapes.SavingsPlansDescribeSavingsPlansRequest): SavingsPlansResponsesDescribeSavingsPlans {
    return new SavingsPlansResponsesDescribeSavingsPlans(this, this.__resources, input);
  }

  public describeSavingsPlansOfferingRates(input: shapes.SavingsPlansDescribeSavingsPlansOfferingRatesRequest): SavingsPlansResponsesDescribeSavingsPlansOfferingRates {
    return new SavingsPlansResponsesDescribeSavingsPlansOfferingRates(this, this.__resources, input);
  }

  public describeSavingsPlansOfferings(input: shapes.SavingsPlansDescribeSavingsPlansOfferingsRequest): SavingsPlansResponsesDescribeSavingsPlansOfferings {
    return new SavingsPlansResponsesDescribeSavingsPlansOfferings(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SavingsPlansListTagsForResourceRequest): SavingsPlansResponsesListTagsForResource {
    return new SavingsPlansResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.SavingsPlansTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SavingsPlansUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class SavingsPlansResponsesCreateSavingsPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SavingsPlansCreateSavingsPlanRequest) {
  }

  public get savingsPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSavingsPlan',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.CreateSavingsPlan.savingsPlanId'),
        outputPath: 'savingsPlanId',
        parameters: {
          savingsPlanOfferingId: this.__input.savingsPlanOfferingId,
          commitment: this.__input.commitment,
          upfrontPaymentAmount: this.__input.upfrontPaymentAmount,
          purchaseTime: this.__input.purchaseTime,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSavingsPlan.savingsPlanId', props);
    return resource.getResponseField('savingsPlanId') as unknown as string;
  }

}

export class SavingsPlansResponsesDescribeSavingsPlanRates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SavingsPlansDescribeSavingsPlanRatesRequest) {
  }

  public get savingsPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSavingsPlanRates',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DescribeSavingsPlanRates.savingsPlanId'),
        outputPath: 'savingsPlanId',
        parameters: {
          savingsPlanId: this.__input.savingsPlanId,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSavingsPlanRates.savingsPlanId', props);
    return resource.getResponseField('savingsPlanId') as unknown as string;
  }

  public get searchResults(): shapes.SavingsPlansSavingsPlanRate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSavingsPlanRates',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DescribeSavingsPlanRates.searchResults'),
        outputPath: 'searchResults',
        parameters: {
          savingsPlanId: this.__input.savingsPlanId,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSavingsPlanRates.searchResults', props);
    return resource.getResponseField('searchResults') as unknown as shapes.SavingsPlansSavingsPlanRate[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSavingsPlanRates',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DescribeSavingsPlanRates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          savingsPlanId: this.__input.savingsPlanId,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSavingsPlanRates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SavingsPlansResponsesDescribeSavingsPlans {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SavingsPlansDescribeSavingsPlansRequest) {
  }

  public get savingsPlans(): shapes.SavingsPlansSavingsPlan[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSavingsPlans',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DescribeSavingsPlans.savingsPlans'),
        outputPath: 'savingsPlans',
        parameters: {
          savingsPlanArns: this.__input.savingsPlanArns,
          savingsPlanIds: this.__input.savingsPlanIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          states: this.__input.states,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSavingsPlans.savingsPlans', props);
    return resource.getResponseField('savingsPlans') as unknown as shapes.SavingsPlansSavingsPlan[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSavingsPlans',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DescribeSavingsPlans.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          savingsPlanArns: this.__input.savingsPlanArns,
          savingsPlanIds: this.__input.savingsPlanIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          states: this.__input.states,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSavingsPlans.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SavingsPlansResponsesDescribeSavingsPlansOfferingRates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SavingsPlansDescribeSavingsPlansOfferingRatesRequest) {
  }

  public get searchResults(): shapes.SavingsPlansSavingsPlanOfferingRate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSavingsPlansOfferingRates',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DescribeSavingsPlansOfferingRates.searchResults'),
        outputPath: 'searchResults',
        parameters: {
          savingsPlanOfferingIds: this.__input.savingsPlanOfferingIds,
          savingsPlanPaymentOptions: this.__input.savingsPlanPaymentOptions,
          savingsPlanTypes: this.__input.savingsPlanTypes,
          products: this.__input.products,
          serviceCodes: this.__input.serviceCodes,
          usageTypes: this.__input.usageTypes,
          operations: this.__input.operations,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSavingsPlansOfferingRates.searchResults', props);
    return resource.getResponseField('searchResults') as unknown as shapes.SavingsPlansSavingsPlanOfferingRate[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSavingsPlansOfferingRates',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DescribeSavingsPlansOfferingRates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          savingsPlanOfferingIds: this.__input.savingsPlanOfferingIds,
          savingsPlanPaymentOptions: this.__input.savingsPlanPaymentOptions,
          savingsPlanTypes: this.__input.savingsPlanTypes,
          products: this.__input.products,
          serviceCodes: this.__input.serviceCodes,
          usageTypes: this.__input.usageTypes,
          operations: this.__input.operations,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSavingsPlansOfferingRates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SavingsPlansResponsesDescribeSavingsPlansOfferings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SavingsPlansDescribeSavingsPlansOfferingsRequest) {
  }

  public get searchResults(): shapes.SavingsPlansSavingsPlanOffering[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSavingsPlansOfferings',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DescribeSavingsPlansOfferings.searchResults'),
        outputPath: 'searchResults',
        parameters: {
          offeringIds: this.__input.offeringIds,
          paymentOptions: this.__input.paymentOptions,
          productType: this.__input.productType,
          planTypes: this.__input.planTypes,
          durations: this.__input.durations,
          currencies: this.__input.currencies,
          descriptions: this.__input.descriptions,
          serviceCodes: this.__input.serviceCodes,
          usageTypes: this.__input.usageTypes,
          operations: this.__input.operations,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSavingsPlansOfferings.searchResults', props);
    return resource.getResponseField('searchResults') as unknown as shapes.SavingsPlansSavingsPlanOffering[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSavingsPlansOfferings',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.DescribeSavingsPlansOfferings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          offeringIds: this.__input.offeringIds,
          paymentOptions: this.__input.paymentOptions,
          productType: this.__input.productType,
          planTypes: this.__input.planTypes,
          durations: this.__input.durations,
          currencies: this.__input.currencies,
          descriptions: this.__input.descriptions,
          serviceCodes: this.__input.serviceCodes,
          usageTypes: this.__input.usageTypes,
          operations: this.__input.operations,
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSavingsPlansOfferings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SavingsPlansResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SavingsPlansListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SavingsPlans',
        physicalResourceId: cr.PhysicalResourceId.of('SavingsPlans.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

