import Ember from 'ember';

export default Ember.Component.extend({

  name: 'test-pulse',
  dismissedHints: Ember.A([]),
  hintIsVisible: false,

  isDismissed: Ember.computed('dismissedHints.[]', function() {
    return this.get('dismissedHints').contains(this.get('name'));
  }),

  actions: {

    onClick() {
      this.send('toggleHint');
    },

    onDismiss(name) {
      this.set('isDismissed', true);

      if (this.attrs.onClick) {
        this.attrs.onDismiss(name);
      }
    },

    toggleHint() {
      this.toggleProperty('hintIsVisible');
      return;
    }

  }

});