import { Component } from '@angular/core';

@Component({
  selector: 'Signin',
  template: `
  <div class="h-screen bg-slate-500 flex items-center justify-center">
    <div class="mx-auto relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <div class="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
        <h3 class="block font-sans text-3xl antialiased font-semibold leaning-snug tracking-normal text-white capitalize">{{'signin'|i18next}}</h3>
      </div>
      <form>
        <div class="flex flex-col gap-4 p-6">
          <div class="relative h-11 w-full min-w-[200px]">
            <Floatextfield label="Email"></Floatextfield>
          </div>
          <div class="relative h-11 w-full min-w-[200px]">
            <Floatextfield label="password"></Floatextfield>
          </div>
          <div class="-ml-2.5">
            <Checkbox label="remember_me"></Checkbox>
          </div>
        </div>
        <div class="p-6 pt-0">
          <AppButton>{{'signin'|i18next}}</AppButton>
        </div>
      </form>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class SigninComponent {

}
