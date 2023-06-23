const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');

describe('emailQueueProcessor', () => {
  let emailQueueProcessor;
  let sendEmailStub;
  let createCustomersStub;

  beforeEach(() => {
    sendEmailStub = sinon.stub().resolves({ messageId: '123' });
    createCustomersStub = sinon.stub().resolves(true);

    emailQueueProcessor = proxyquire('../processors/emailQueueProcessor', {
      '../helpers': {
        sendEmail: sendEmailStub,
      },
      '../services': {
        createCustomers: createCustomersStub,
      },
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should send emails and create customers in the database', async () => {
    const job = {
      id: 'job-id',
      data: [
        {
          enabled: 'true',
          to: 'test@example.com',
          subject: 'Test',
          body: 'Hello',
        },
        {
          enabled: 'true',
          to: 'another@example.com',
          subject: 'Another Test',
          body: 'Hi',
        },
      ],
    };

    const done = sinon.stub();

    await emailQueueProcessor(job, done);

    expect(sendEmailStub.callCount).to.equal(2);
    expect(createCustomersStub.callCount).to.equal(1);
    expect(done.callCount).to.equal(1);
  });
});
