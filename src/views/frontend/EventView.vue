<template>
  <DefaultFrontend_1>
    <div id="EventPage" class="animate__animated animate__fadeIn">
      <section class="sc__count mt-50">
        <event-campaign />
      </section>
      <section class="sc__count">
        <event-count />
      </section>
      <section class="sc__auction mt-50">
        <event-auction />
      </section>
      <section class="sc__listOrganization mt-50">
        <event-organization />
      </section>
    </div>
    <popup-auction />
  </DefaultFrontend_1>
</template>

<script>
import DefaultFrontend_1 from "@/layouts/DefaultFrontend_1.vue";
import EventCount from "@/components/frontend/EventCount.vue";
import EventCampaign from "@/components/frontend/EventCampaign.vue";
import EventAuction from "@/components/frontend/EventAuction.vue";
import PopupAuction from "@/components/frontend/EventItemPopupAuction.vue";
import EventOrganization from "@/components/frontend/EventOrganization.vue";
export default {
  name: "EventView",
  components: {
    DefaultFrontend_1,
    EventCount,
    EventCampaign,
    EventAuction,
    PopupAuction,
    EventOrganization,
  },
};
</script>
