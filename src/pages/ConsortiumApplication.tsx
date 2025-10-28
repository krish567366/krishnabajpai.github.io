import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useForm as useFormspree, ValidationError } from '@formspree/react';
import { useIpGeolocation } from "@/hooks/useIpGeolocation";

// Form section types
type FormSection = 
  | "personal"
  | "company"
  | "portfolio"
  | "technology"
  | "participation"
  | "references";

type FormSectionData = {
  title: string;
  description: string;
};

const formSections: Record<FormSection, FormSectionData> = {
  personal: {
    title: "Personal Information",
    description: "Provide your contact and professional details"
  },
  company: {
    title: "Company Information",
    description: "Tell us about your organization"
  },
  portfolio: {
    title: "Portfolio & Investment Profile",
    description: "Share your investment focus and experience"
  },
  technology: {
    title: "Technology & Operations",
    description: "Describe your technical capabilities"
  },
  participation: {
    title: "Consortium Participation",
    description: "Explain your objectives and intended contribution"
  },
  references: {
    title: "References & Endorsements",
    description: "Provide professional references"
  }
};

const formSchema = z.object({
  // Section I: Personal Information
  fullName: z.string().min(2, "Full legal name is required"),
  businessEmail: z.string().email("Must be a valid company email")
    .regex(/^[^@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com).+$/i, "Must be a company email domain"),
  phone: z.string().min(10, "Please include country code"),

  // Section II: Company Information
  companyName: z.string().min(2, "Company name is required"),
  position: z.string().min(2, "Position/Role is required"),
  companySize: z.enum(["1-50", "51-200", "201-1000", "1001-5000", "5000+"]),
  industry: z.string().min(2, "Please select industry"),

  // Section III: Portfolio & Investment Profile
  portfolioSize: z.enum(["10-50m", "51-200m", "201-500m", "501m-1b", "1b+"]),
  investmentFocus: z.string().min(50, "Please provide detailed investment strategy"),
  geographicFocus: z.string().min(2, "Please specify active markets"),

  // Section IV: Technology & Operations
  currentTech: z.string().min(10, "Please list key technology tools"),
  challenges: z.string().min(50, "Please describe key operational challenges"),
  expectations: z.string().min(50, "Please outline your objectives"),

  // Section V: References
  references: z.string().optional()
});

const companyTypes = [
  "Developer",
  "Investor",
  "Asset Manager",
  "PropTech",
  "Advisory",
  "Other"
] as const;

const companySizes = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500+"
] as const;

const portfolioSizes = [
  "Below $10M",
  "$10-50M",
  "$50-250M",
  "$250M-$1B",
  "$1B+"
] as const;

const engagementModes = [
  "Observer",
  "Collaborative Member",
  "Strategic Partner"
] as const;

const ConsortiumApplication = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [currentSection, setCurrentSection] = useState(1);
  const { geolocationData, loading: geoLoading } = useIpGeolocation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Section I: Personal Information
      fullName: "",
      businessEmail: "",
      phone: "",

      // Section II: Company Information
      companyName: "",
      position: "",
      companySize: "1-50",

      // Section III: Portfolio & Investment Profile
      portfolioSize: "10-50m",
      investmentFocus: "",
      geographicFocus: "",

      // Section IV: Technology & Operations
      currentTech: "",
      challenges: "",
      expectations: "",

      // Section V: References
      references: ""
    },
  });

  const [formspreeState, handleFormspreeSubmit] = useFormspree("xzzkdgqk");

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setFormStatus("submitting");
    try {
      const geoLocationString = geolocationData 
        ? `IP: ${geolocationData.ip}\nLocation: ${geolocationData.city}, ${geolocationData.region}, ${geolocationData.country}\nTimezone: ${geolocationData.timezone}\nCoordinates: ${geolocationData.latitude},${geolocationData.longitude}`
        : 'Geolocation data not available';

      await handleFormspreeSubmit({
        ...values,
        _geolocation: geoLocationString
      });

      // Wait for the next tick to ensure formspreeState is updated
      setTimeout(() => {
        if (!formspreeState.errors) {
          setFormStatus("success");
          form.reset();
          setCurrentSection(1);
        } else {
          setFormStatus("error");
        }
      }, 100);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Consortium Membership Application | Krishna Bajpai</title>
        <meta name="description" content="Apply to join the exclusive Real Estate Intelligence Network. For institutional investors, family offices, and real estate leaders seeking ML-driven market intelligence." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://krishnabajpai.me/consortium-application" />
      </Helmet>

      <Layout>
        <div className="py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Consortium Membership Application
              </h1>
              <p className="text-lg text-muted-foreground">
                Join an elite network of real estate leaders leveraging ML-driven market intelligence
              </p>
            </div>

            {formStatus === "success" && (
              <Alert className="mb-8 bg-emerald-500/15 text-emerald-500 border-emerald-500/30">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Application Successfully Submitted!</AlertTitle>
                <AlertDescription className="space-y-2">
                  <p>Thank you for your interest in joining our Real Estate Intelligence Consortium. Your application has been received successfully.</p>
                  <p><strong>Next steps:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Our team will review your application within 2-3 business days</li>
                    <li>You'll receive a detailed email with feedback and next steps</li>
                    <li>If approved, we'll schedule an introduction call to discuss collaboration opportunities</li>
                  </ul>
                  <p className="text-sm mt-4">If you don't receive a response within 3 business days, please check your spam folder or contact us directly at consortium@krishnabajpai.me</p>
                </AlertDescription>
              </Alert>
            )}

            {formStatus === "error" && (
                            <div className="space-y-4">
                <Alert variant={formStatus === "error" ? "destructive" : "default"}>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error Submitting Form</AlertTitle>
                  <AlertDescription>
                    {formspreeState.errors 
                      ? "Please check your form inputs and try again."
                      : "There was an error submitting your application. Please try again."}
                  </AlertDescription>
                </Alert>
                <ValidationError errors={formspreeState.errors} />
              </div>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">Personal Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Company Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">Company Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input placeholder="Your role in the company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-50">1-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-1000">201-1000 employees</SelectItem>
                            <SelectItem value="1001-5000">1001-5000 employees</SelectItem>
                            <SelectItem value="5000+">5000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Industry Focus</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="commercial">Commercial Real Estate</SelectItem>
                            <SelectItem value="residential">Residential Real Estate</SelectItem>
                            <SelectItem value="industrial">Industrial Properties</SelectItem>
                            <SelectItem value="retail">Retail Properties</SelectItem>
                            <SelectItem value="hospitality">Hospitality</SelectItem>
                            <SelectItem value="mixed">Mixed-Use Development</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Portfolio & Investment Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">Portfolio & Investment Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="portfolioSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio Size (USD)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select portfolio size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="10-50m">$10M - $50M</SelectItem>
                            <SelectItem value="51-200m">$51M - $200M</SelectItem>
                            <SelectItem value="201-500m">$201M - $500M</SelectItem>
                            <SelectItem value="501m-1b">$501M - $1B</SelectItem>
                            <SelectItem value="1b+">$1B+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="investmentFocus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Investment Focus</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your investment strategy and focus areas"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Include details about your typical investment size, asset types, and return expectations.
                          <span className="block mt-1 text-sm text-muted-foreground">
                            Minimum {field.value?.length || 0}/50 characters required
                          </span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="geographicFocus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Geographic Focus</FormLabel>
                        <FormControl>
                          <Input placeholder="Primary geographic regions of interest" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Technical & Operational Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">Technical & Operational Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="currentTech"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Technology Stack</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your current technology solutions and tools"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          List any property management, analysis, or valuation tools you currently use
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="challenges"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Challenges</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What are your main challenges in property valuation and market analysis?"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Describe specific problems you're looking to solve through consortium membership.
                          <span className="block mt-1 text-sm text-muted-foreground">
                            Minimum {field.value?.length || 0}/50 characters required
                          </span>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="expectations"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Membership Expectations</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What do you hope to achieve through consortium membership?"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Detail your expected outcomes and how you plan to contribute to the consortium
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* References */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">References</h2>
                  
                  <FormField
                    control={form.control}
                    name="references"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry References</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide any relevant industry references or connections"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Include names and positions of references, particularly any existing consortium members
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>

            <div className="mt-8 text-sm text-muted-foreground text-center">
              <p>All information provided will be kept strictly confidential and used only for membership evaluation purposes.</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConsortiumApplication;