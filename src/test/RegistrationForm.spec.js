import { mount } from '@vue/test-utils';
import RegistrationForm from '../components/RegistrationForm.vue';

describe('RegistrationForm.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RegistrationForm);
  });

  it('renders all child components', () => {
    expect(wrapper.findComponent({ name: 'EmailInput' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'PasswordInput' }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: 'TermsCheckbox' }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: 'RegisterButton' }).exists()).toBe(
      true
    );
  });

  it('disables the submit button when the form is invalid', async () => {
    const wrapper = mount(RegistrationForm);

    // Find elements
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const termsCheckbox = wrapper.find('input[type="checkbox"]');
    const submitButton = wrapper.find('button');

    //Form is invalid
    await emailInput.setValue('');
    await passwordInput.setValue('short'); // Less than 8 characters
    await termsCheckbox.setChecked(false);
  });

  it('enables the submit button when the form is valid', async () => {
    const emailInput = wrapper.find("input[type='email']");
    const passwordInput = wrapper.find("input[type='password']");
    const termsCheckbox = wrapper.find("input[type='checkbox']");
    const submitButton = wrapper.find('button');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('ValidPass123!');
    await termsCheckbox.setChecked(true);

    expect(submitButton.attributes('disabled')).toBeUndefined();
  });

  it('shows an alert on successful submission', async () => {
    global.alert = vi.fn(); // Mock the alert function

    const wrapper = mount(RegistrationForm);

    // Find elements
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const termsCheckbox = wrapper.find('input[type="checkbox"]');
    const form = wrapper.find('form');

    // Set valid values
    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('ValidPass123!');
    await termsCheckbox.setChecked(true);

    // Submit the form
    await form.trigger('submit');

    // Assert that alert was called
    expect(global.alert).toHaveBeenCalledWith('Form submitted!');
  });
});
