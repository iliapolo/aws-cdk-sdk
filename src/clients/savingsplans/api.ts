import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SavingsPlansClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createSavingsPlan(input: shapes.SavingsPlansCreateSavingsPlanRequest): SavingsPlansCreateSavingsPlan {
    return new SavingsPlansCreateSavingsPlan(this, 'CreateSavingsPlan', this.__resources, input);
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

  public describeSavingsPlanRates(input: shapes.SavingsPlansDescribeSavingsPlanRatesRequest): SavingsPlansDescribeSavingsPlanRates {
    return new SavingsPlansDescribeSavingsPlanRates(this, 'DescribeSavingsPlanRates', this.__resources, input);
  }

  public describeSavingsPlans(input: shapes.SavingsPlansDescribeSavingsPlansRequest): SavingsPlansDescribeSavingsPlans {
    return new SavingsPlansDescribeSavingsPlans(this, 'DescribeSavingsPlans', this.__resources, input);
  }

  public describeSavingsPlansOfferingRates(input: shapes.SavingsPlansDescribeSavingsPlansOfferingRatesRequest): SavingsPlansDescribeSavingsPlansOfferingRates {
    return new SavingsPlansDescribeSavingsPlansOfferingRates(this, 'DescribeSavingsPlansOfferingRates', this.__resources, input);
  }

  public describeSavingsPlansOfferings(input: shapes.SavingsPlansDescribeSavingsPlansOfferingsRequest): SavingsPlansDescribeSavingsPlansOfferings {
    return new SavingsPlansDescribeSavingsPlansOfferings(this, 'DescribeSavingsPlansOfferings', this.__resources, input);
  }

  public listTagsForResource(input: shapes.SavingsPlansListTagsForResourceRequest): SavingsPlansListTagsForResource {
    return new SavingsPlansListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

export class SavingsPlansCreateSavingsPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SavingsPlansCreateSavingsPlanRequest) {
    super(scope, id);
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
          savingsPlanOfferingId: this.input.savingsPlanOfferingId,
          commitment: this.input.commitment,
          upfrontPaymentAmount: this.input.upfrontPaymentAmount,
          purchaseTime: this.input.purchaseTime,
          clientToken: this.input.clientToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSavingsPlan.savingsPlanId', props);
    return resource.getResponseField('savingsPlanId') as unknown as string;
  }

}

export class SavingsPlansDescribeSavingsPlanRates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SavingsPlansDescribeSavingsPlanRatesRequest) {
    super(scope, id);
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
          savingsPlanId: this.input.savingsPlanId,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSavingsPlanRates.savingsPlanId', props);
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
          savingsPlanId: this.input.savingsPlanId,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSavingsPlanRates.searchResults', props);
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
          savingsPlanId: this.input.savingsPlanId,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSavingsPlanRates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SavingsPlansDescribeSavingsPlans extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SavingsPlansDescribeSavingsPlansRequest) {
    super(scope, id);
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
          savingsPlanArns: this.input.savingsPlanArns,
          savingsPlanIds: this.input.savingsPlanIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          states: this.input.states,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSavingsPlans.savingsPlans', props);
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
          savingsPlanArns: this.input.savingsPlanArns,
          savingsPlanIds: this.input.savingsPlanIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          states: this.input.states,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSavingsPlans.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SavingsPlansDescribeSavingsPlansOfferingRates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SavingsPlansDescribeSavingsPlansOfferingRatesRequest) {
    super(scope, id);
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
          savingsPlanOfferingIds: this.input.savingsPlanOfferingIds,
          savingsPlanPaymentOptions: this.input.savingsPlanPaymentOptions,
          savingsPlanTypes: this.input.savingsPlanTypes,
          products: this.input.products,
          serviceCodes: this.input.serviceCodes,
          usageTypes: this.input.usageTypes,
          operations: this.input.operations,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSavingsPlansOfferingRates.searchResults', props);
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
          savingsPlanOfferingIds: this.input.savingsPlanOfferingIds,
          savingsPlanPaymentOptions: this.input.savingsPlanPaymentOptions,
          savingsPlanTypes: this.input.savingsPlanTypes,
          products: this.input.products,
          serviceCodes: this.input.serviceCodes,
          usageTypes: this.input.usageTypes,
          operations: this.input.operations,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSavingsPlansOfferingRates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SavingsPlansDescribeSavingsPlansOfferings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SavingsPlansDescribeSavingsPlansOfferingsRequest) {
    super(scope, id);
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
          offeringIds: this.input.offeringIds,
          paymentOptions: this.input.paymentOptions,
          productType: this.input.productType,
          planTypes: this.input.planTypes,
          durations: this.input.durations,
          currencies: this.input.currencies,
          descriptions: this.input.descriptions,
          serviceCodes: this.input.serviceCodes,
          usageTypes: this.input.usageTypes,
          operations: this.input.operations,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSavingsPlansOfferings.searchResults', props);
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
          offeringIds: this.input.offeringIds,
          paymentOptions: this.input.paymentOptions,
          productType: this.input.productType,
          planTypes: this.input.planTypes,
          durations: this.input.durations,
          currencies: this.input.currencies,
          descriptions: this.input.descriptions,
          serviceCodes: this.input.serviceCodes,
          usageTypes: this.input.usageTypes,
          operations: this.input.operations,
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSavingsPlansOfferings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SavingsPlansListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SavingsPlansListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

