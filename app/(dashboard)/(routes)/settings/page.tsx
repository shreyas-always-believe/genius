import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings, SubscriptIcon } from "lucide-react";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconcolor="text-gray-700"
        bgcolor="bg-gray-700/10"
      />

      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on PRO plan."
            : "You are currently on FREE plan."}
        </div>
        <SubscriptionButton isPro={isPro}></SubscriptionButton>
      </div>
    </div>
  );
};

export default SettingsPage;
